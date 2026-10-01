import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, ChromiumBrowser } from '@playwright/test';
import { CustomWorld } from './custom-world';

let browser: ChromiumBrowser;

setDefaultTimeout(60000);

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

AfterAll(async function () {
  await browser.close();
});

Before(async function (this: CustomWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario) {
  if (this.page) {
    // Tomar screenshot al final de cada caso de prueba como evidencia
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
    await this.page.close();
  }
  await this.context?.close();
});
