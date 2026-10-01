import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillShippingInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
  }

  async continueCheckout() {
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishCheckout() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async verifyCheckoutComplete() {
    const completeHeader = this.page.locator('.complete-header');
    await expect(completeHeader).toContainText('Thank you for your order');
  }
}
