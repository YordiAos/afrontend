import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { BrowserContext, Page, PlaywrightTestOptions } from '@playwright/test';

export interface CustomWorld extends World {
  context?: BrowserContext;
  page?: Page;
  playwrightOptions?: PlaywrightTestOptions;
}

export class CustomWorldImpl extends World implements CustomWorld {
  context?: BrowserContext;
  page?: Page;
  playwrightOptions?: PlaywrightTestOptions;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorldImpl);
