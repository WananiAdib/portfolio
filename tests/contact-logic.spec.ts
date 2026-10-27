import { expect, test } from '@playwright/test'
import { portfolioShareUrl, sharePortfolioLink } from '../lib/contact-actions'
import { GET } from '../app/contact.vcf/route'

test('share URL omits private query parameters, route, and fragment', () => {
  expect(portfolioShareUrl('https://wananiadib.com/cv?ref=visitor#work')).toBe(
    'https://wananiadib.com/',
  )
})

test('native sharing succeeds and receives only public identity', async () => {
  const calls: ShareData[] = []
  const result = await sharePortfolioLink(
    {
      share: async (data) => {
        calls.push(data)
      },
    },
    'https://wananiadib.com/',
  )
  expect(result).toEqual({ kind: 'shared' })
  expect(calls).toEqual([
    { title: 'Adib El Ounani — Portfolio', url: 'https://wananiadib.com/' },
  ])
})

test('native share cancellation does not silently write to the clipboard', async () => {
  let copied = false
  const result = await sharePortfolioLink(
    {
      share: async () => {
        throw new DOMException('Canceled', 'AbortError')
      },
      clipboard: {
        writeText: async () => {
          copied = true
        },
      },
    },
    'https://wananiadib.com/',
  )
  expect(result).toEqual({ kind: 'canceled' })
  expect(copied).toBe(false)
})

test('clipboard fallback reports success only after writing', async () => {
  let copied = ''
  const result = await sharePortfolioLink(
    {
      clipboard: {
        writeText: async (text) => {
          copied = text
        },
      },
    },
    'https://wananiadib.com/',
  )
  expect(result).toEqual({ kind: 'copied' })
  expect(copied).toBe('https://wananiadib.com/')
})

test('missing, denied and failed sharing capabilities offer a manual link', async () => {
  const url = 'https://wananiadib.com/'
  for (const capabilities of [
    {},
    {
      clipboard: {
        writeText: async () => {
          throw new Error('Denied')
        },
      },
    },
    {
      share: async () => {
        throw new Error('Unavailable')
      },
    },
  ]) {
    expect(await sharePortfolioLink(capabilities, url)).toEqual({
      kind: 'manual',
      url,
    })
  }
})

test('vCard output is a downloadable CRLF document with no placeholder address', async () => {
  const response = GET()
  expect(response.headers.get('Content-Type')).toBe('text/vcard; charset=utf-8')
  expect(response.headers.get('Content-Disposition')).toContain(
    'adib-el-ounani.vcf',
  )
  const content = await response.text()
  expect(content.startsWith('BEGIN:VCARD\r\nVERSION:3.0\r\n')).toBe(true)
  expect(content.endsWith('END:VCARD\r\n')).toBe(true)
  expect(content).toContain('N:El Ounani;Adib;;;\r\n')
  expect(content).toContain('EMAIL;TYPE=INTERNET:wananiadib@gmail.com')
  expect(content).not.toContain('your@email')
})

test('CV response includes all four existing roles without hidden project/blog content', async ({
  request,
}) => {
  const response = await request.get('/cv')
  expect(response.status()).toBe(200)
  const html = await response.text()
  for (const company of ['Ylookup', 'Nolana AI', 'Blacty', 'Kaedim'])
    expect(html).toContain(company)
  expect(html).toContain('Print or save PDF')
  expect(html).toContain('mailto:wananiadib@gmail.com')
  expect(html).not.toContain('Motion Primitives Pro')
  expect(html).not.toContain('Why I left my job')
})
