import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyProductInCart() {
    const cartItems = this.page.locator('.cart_item');
    await expect(cartItems).toHaveCount(1);
  }

  async proceedToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}
