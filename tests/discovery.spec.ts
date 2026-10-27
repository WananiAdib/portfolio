import { expect, test } from '@playwright/test'

test('404 recovery navigates to real content and supports Back', async ({
  page,
}) => {
  await page.goto('/this-page-does-not-exist')
  await expect(
    page.getByRole('heading', { name: 'Page not found' }),
  ).toBeVisible()
  await page
    .getByRole('navigation', { name: 'Page recovery' })
    .getByRole('link', { name: 'Work experience' })
    .click()
  await expect(page).toHaveURL(/\/#experience$/)
  await expect(
    page.getByRole('heading', { name: 'Work Experience' }),
  ).toBeInViewport()
  await page.goBack()
  await expect(
    page.getByRole('heading', { name: 'Page not found' }),
  ).toBeVisible()
  await page
    .getByRole('link', { name: 'Back to portfolio', exact: true })
    .click()
  await expect(page).toHaveURL('http://127.0.0.1:3210/')
})
