import { expect, test } from '@playwright/test'

test('email link and successful repeated copy use the public address', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: async (text: string) => {
          document.documentElement.dataset.copied = text
        },
      },
    })
  })
  await page.goto('/')
  await expect(
    page.getByRole('link', { name: 'Email me', exact: true }),
  ).toHaveAttribute('href', 'mailto:wananiadib@gmail.com')
  for (let i = 0; i < 2; i++) {
    await page.getByRole('button', { name: 'Copy email', exact: true }).click()
    await expect(page.getByRole('status')).toHaveText('Email address copied.')
    await expect(page.locator('html')).toHaveAttribute(
      'data-copied',
      'wananiadib@gmail.com',
    )
  }
})

test('denied clipboard provides an honest email fallback', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: async () => {
          throw new Error('Denied')
        },
      },
    })
  })
  await page.goto('/')
  await page.getByRole('button', { name: 'Copy email', exact: true }).click()
  await expect(page.getByRole('status')).toContainText('Copy is unavailable.')
  await expect(
    page.getByRole('link', { name: 'wananiadib@gmail.com', exact: true }),
  ).toBeVisible()
})

test('share falls back to copying the homepage without query or hash', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'share', { value: undefined })
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: async (text: string) => {
          document.documentElement.dataset.copied = text
        },
      },
    })
  })
  await page.goto('/?ref=private-context#contact')
  await page
    .getByRole('button', { name: 'Share portfolio', exact: true })
    .click()
  await expect(page.getByRole('status')).toHaveText('Portfolio link copied.')
  await expect(page.locator('html')).toHaveAttribute(
    'data-copied',
    'http://127.0.0.1:3210/',
  )
})

test('canceled native sharing can be retried without showing an error', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'share', {
      value: async () => {
        throw new DOMException('Canceled', 'AbortError')
      },
    })
  })
  await page.goto('/')
  for (let i = 0; i < 2; i++) {
    await page
      .getByRole('button', { name: 'Share portfolio', exact: true })
      .click()
    await expect(page.getByRole('status')).toHaveText('Sharing canceled.')
    await expect(
      page.getByRole('button', { name: 'Share portfolio', exact: true }),
    ).toBeEnabled()
  }
  await expect(page.getByLabel('Portfolio link')).toHaveCount(0)
})

test('unavailable share and clipboard reveal a selectable link', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'share', { value: undefined })
    Object.defineProperty(navigator, 'clipboard', { value: undefined })
  })
  await page.goto('/')
  await page
    .getByRole('button', { name: 'Share portfolio', exact: true })
    .click()
  await expect(page.getByRole('status')).toContainText(
    'Sharing is unavailable.',
  )
  await expect(page.getByLabel('Portfolio link')).toHaveValue(
    'http://127.0.0.1:3210/',
  )
})

test('contact download uses CRLF and only published identity fields', async ({
  request,
}) => {
  const response = await request.get('/contact.vcf')
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toContain('text/vcard')
  expect(response.headers()['content-disposition']).toContain('attachment')
  const card = await response.text()
  expect(card).toContain('FN:Adib El Ounani\r\n')
  expect(card).toContain('EMAIL;TYPE=INTERNET:wananiadib@gmail.com\r\n')
  expect(card).toContain('URL:https://github.com/WananiAdib\r\n')
  expect(card).not.toMatch(/TEL:|ADR:|ORG:|your@email/)
  expect(card.replace(/\r\n/g, '')).not.toContain('\n')
})

test('printable CV preserves work facts and prints without navigation', async ({
  page,
}) => {
  await page.goto('/cv')
  await expect(
    page.getByRole('heading', { name: 'Adib El Ounani', exact: true }),
  ).toBeVisible()
  await expect(
    page.locator('main li').filter({ hasText: 'Ylookup' }),
  ).toContainText('Jul 2026 – Present')
  await expect(page.locator('main ol li')).toHaveCount(4)
  await page.evaluate(() => {
    window.print = () => {
      document.documentElement.dataset.printed = 'true'
    }
  })
  await page.getByRole('button', { name: 'Print or save PDF' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-printed', 'true')
  await page.emulateMedia({ media: 'print', colorScheme: 'dark' })
  await expect(page.locator('header')).toBeHidden()
  await expect(page.locator('footer')).toBeHidden()
  await expect(
    page.getByRole('button', { name: 'Print or save PDF' }),
  ).toBeHidden()
  await expect(page.locator('main')).toHaveCSS('color', 'rgb(0, 0, 0)')
})

test('contact controls fit a narrow viewport and CV navigation supports Back', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 720 })
  await page.goto('/')
  await page.getByRole('link', { name: 'Printable CV', exact: true }).click()
  await expect(page).toHaveURL(/\/cv$/)
  await page.goBack()
  await expect(
    page.getByRole('link', { name: 'Printable CV', exact: true }),
  ).toBeVisible()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true)
})
