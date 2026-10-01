import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillCredentials(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
  }

  async clickLogin() {
    await this.page.locator('[data-test="login-button"]').click();
  }

  async getErrorMessage() {
    return this.page.locator('[data-test="error"]').textContent();
  }
}
