import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

Given('que estoy en la pagina de inicio de sesion de Sauce Demo', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.navigate();
});

When('ingreso el usuario {string} y la contrasena {string}', async function (this: CustomWorld, user: string, pass: string) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.fillCredentials(user, pass);
});

When('hago clic en el boton de inicio de sesion', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.clickLogin();
});

Then('deberia ser redirigido a la pagina de productos', async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.verifyOnInventoryPage();
});

Then('deberia ver un mensaje de error indicando que el usuario esta bloqueado', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
});

// Nuevos steps de reusabilidad
Given('he iniciado sesion como {string}', async function (this: CustomWorld, user: string) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.fillCredentials(user, 'secret_sauce');
  await loginPage.clickLogin();
});

When('agrego el primer producto al carrito', async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.addFirstProductToCart();
});

Given('he agregado un producto al carrito', async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.addFirstProductToCart();
});

Then('el icono del carrito deberia mostrar que hay {string} producto', async function (this: CustomWorld, count: string) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.verifyCartBadge(count);
});

When('voy al carrito de compras', async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.goToCart();
});

Given('estoy en el carrito de compras', async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.goToCart();
});

Then('deberia ver el producto en el carrito', async function (this: CustomWorld) {
  const cartPage = new CartPage(this.page!);
  await cartPage.verifyProductInCart();
});

When('procedo al checkout', async function (this: CustomWorld) {
  const cartPage = new CartPage(this.page!);
  await cartPage.proceedToCheckout();
});

When('ingreso la informacion de envio: nombre {string}, apellido {string}, codigo postal {string}', async function (this: CustomWorld, firstName: string, lastName: string, postalCode: string) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.fillShippingInfo(firstName, lastName, postalCode);
});

When('continuo con el checkout', async function (this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.continueCheckout();
});

When('finalizo la compra', async function (this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.finishCheckout();
});

Then('deberia ver un mensaje de confirmacion de la compra', async function (this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.verifyCheckoutComplete();
});
