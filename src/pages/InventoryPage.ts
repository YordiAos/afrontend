import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async verifyOnInventoryPage() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
  }

  async addFirstProductToCart() {
    const firstProductAddBtn = this.page.locator('.inventory_item').first().locator('button:has-text("Add to cart")');
    await firstProductAddBtn.click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async verifyCartBadge(count: string) {
    const badge = this.page.locator('.shopping_cart_badge');
    await expect(badge).toHaveText(count);
  }
}
