import { test, expect } from '@playwright/test';
import parseXliff, { TranslationMap } from './parseXliff';
import path from 'node:path';

let translations: TranslationMap;

test.beforeAll(async () => {
  const xliffPath = path.join(__dirname, '..', 'src', 'locale', 'messages.g.xlf');
  translations = await parseXliff(xliffPath);
});

test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('gcds-heading')).toHaveText(translations['common.pageTitle.home']);

  await expect(page.locator('gcds-text').first()).toHaveText(translations['page.home.welcome']);
});

test('switches language', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Français');
  await page.waitForURL('/fr');
});
