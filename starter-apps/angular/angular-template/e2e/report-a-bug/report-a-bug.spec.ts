import { expect, test } from '@playwright/test';
import path from 'node:path';
import parseXliff, { TranslationMap } from '../parseXliff';

let translations: TranslationMap;

test.beforeAll(async () => {
  const xliffPath = path.join(__dirname, '..', '..', 'src', 'locale', 'messages.g.xlf');
  translations = await parseXliff(xliffPath);
});

test('visit bug report page', async ({ page }) => {
  await page.goto('/report-a-bug');

  await expect(page.locator('gcds-heading').first()).toHaveText(translations['common.pageTitle.reportABug']);
  await expect(page.locator('gcds-text').first()).toHaveText(translations['page.reportABug.subtitle']);
});

test('report bug form missing fields', async ({ page }) => {
  await page.goto('/report-a-bug');

  await page.click('text=Submit');
  await expect(page.locator('gcds-error-message').first()).toHaveText('Enter information to continue.');
});

test('report bug form', async ({ page }) => {
  await page.goto('/report-a-bug');

  await page.getByLabel('GC Design System Components Package and Version').fill('1.0.0');
  await page.getByLabel('Title').fill('title');
  await page.getByLabel('Current Behavior').fill('current behavior');
  await page.getByLabel('Expected Behavior').fill('expected behavior');
  await page.getByLabel('Steps to Reproduce').fill('steps to reproduce');
  await page.getByLabel('Code Reproduction URL').fill('code reproduction url');
  await page.getByLabel('System Info').fill('system info');
  await page.getByLabel('Additional Information').fill('additional information');
  await page.click('text=Submit');
  await expect(page.locator('gcds-heading').locator('nth=0')).toHaveText(translations['common.pageTitle.reportABug']);
  await expect(page.locator('gcds-heading').locator('nth=1')).toHaveText(translations['page.reportABug.confirmation']);
});
