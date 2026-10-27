import { expect, test } from '@playwright/test'

test('keyboard skip link moves focus to the main content', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('link', { name: 'Skip to main content' }),
  ).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
})

test('section and role links support direct navigation and history', async ({
  page,
}) => {
  await page.goto('/')
  await page
    .getByRole('navigation', { name: 'Primary' })
    .getByRole('link', { name: 'Experience', exact: true })
    .click()
  await expect(page).toHaveURL(/#experience$/)
  await page
    .getByRole('link', { name: 'AI Engineer at Ylookup, permalink' })
    .click()
  await expect(page).toHaveURL(/#work4$/)
  await page.goBack()
  await expect(page).toHaveURL(/#experience$/)
  await page.goto('/#work4')
  await expect(page.locator('#work4')).toBeInViewport()
})

test('theme radios expose selection, support arrow keys and persist after reload', async ({
  page,
}) => {
  await page.goto('/')
  const dark = page.getByRole('radio', { name: 'Dark theme', exact: true })
  await page.getByTitle('Dark theme', { exact: true }).click()
  await expect(dark).toBeChecked()
  await expect(page.locator('html')).toHaveClass(/dark/)
  await page.reload()
  await expect(dark).toBeChecked()
  await dark.focus()
  await page.keyboard.press('ArrowRight')
  await expect(
    page.getByRole('radio', { name: 'System theme', exact: true }),
  ).toBeChecked()
})

test('no-JavaScript visitors can read and navigate the portfolio', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:3210/')
  await expect(
    page.getByText('Software engineer and NYU Shanghai grad', { exact: false }),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Work Experience' }),
  ).toBeVisible()
  await page.getByRole('link', { name: 'Printable CV', exact: true }).click()
  await expect(page.locator('main')).toContainText('Ylookup')
  await context.close()
})

test('reduced-motion disables entry animation and magnetic movement', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.locator('#experience')).toHaveCSS('animation-name', 'none')
  const social = page.getByRole('link', { name: 'Github', exact: false })
  await social.hover()
  const wrapper = social.locator('..')
  await expect(wrapper).toHaveCSS('transform', 'none')
})

test('timeline and theme controls fit 320px screens', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 })
  await page.goto('/')
  await expect(page.locator('#work4')).toContainText('Current role')
  await page.getByTitle('Dark theme', { exact: true }).click()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true)
})
