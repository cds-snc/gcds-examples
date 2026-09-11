import { expect, test } from '@playwright/test';
import path from 'node:path';
import parseXliff, { TranslationMap } from './parseXliff';

let translations: TranslationMap;

test.beforeAll(async () => {
  const xliffPath = path.join(__dirname, '..', 'src', 'locale', 'messages.g.xlf');
  translations = await parseXliff(xliffPath);
});

test('shows aboutTopic page breadcrumbs', async ({ page }) => {
  await page.goto('/about/topic');

  await expect(page.locator('gcds-breadcrumbs').locator('gcds-breadcrumbs-item')).toContainText([
    translations['common.pageTitle.about'],
    translations['common.pageTitle.about.topic'],
  ]);
});
