import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('div.greetings > h1')).toHaveText('This is the intro page');
})

test('switches to french', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Français');
  await expect(page.locator('div.greetings > h1')).toHaveText('This is the intro page');
})

test('switches to english', async ({ page }) => {
  await page.goto('/');
  await page.click('text=English');
  await expect(page.locator('div.greetings > h1')).toHaveText('This is the intro page');
})