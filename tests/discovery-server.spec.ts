import { expect, test } from '@playwright/test'

const site = 'https://wananiadib.com'

test('homepage metadata describes the public identity, not the upstream template', async ({
  request,
}) => {
  const response = await request.get('/')
  const html = await response.text()
  expect(html).toContain('<title>Adib El Ounani — Software Engineer</title>')
  expect(html).toContain(`<link rel="canonical" href="${site}"`)
  expect(html).toContain('property="og:site_name" content="Adib El Ounani"')
  expect(html).toContain('name="twitter:card" content="summary_large_image"')
  expect(html).not.toContain('Nim - Personal website template')
  expect(html).not.toContain('nim-fawn.vercel.app')
  const json = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  )?.[1]
  expect(json).toBeTruthy()
  const person = JSON.parse(json!)
  expect(person['@type']).toBe('Person')
  expect(person.name).toBe('Adib El Ounani')
  expect(person.sameAs).toEqual([
    'https://github.com/WananiAdib',
    'https://twitter.com/adibdeving',
    'https://www.linkedin.com/in/adib-el-ounani',
  ])
  expect(person).not.toHaveProperty('jobTitle')
})

test('social previews are real 1200 by 630 PNG images', async ({ request }) => {
  for (const route of ['/opengraph-image', '/twitter-image']) {
    const response = await request.get(route)
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('image/png')
    const image = await response.body()
    expect(image.subarray(1, 4).toString()).toBe('PNG')
    expect(image.readUInt32BE(16)).toBe(1200)
    expect(image.readUInt32BE(20)).toBe(630)
  }
})

test('robots and sitemap use the established domain and only real public pages', async ({
  request,
}) => {
  const robots = await request.get('/robots.txt')
  expect(await robots.text()).toContain(`Sitemap: ${site}/sitemap.xml`)
  const sitemap = await request.get('/sitemap.xml')
  expect(sitemap.status()).toBe(200)
  const xml = await sitemap.text()
  expect(xml).toContain(`<loc>${site}</loc>`)
  expect(xml).toContain(`<loc>${site}/cv</loc>`)
  expect(xml.match(/<loc>/g)).toHaveLength(2)
  expect(xml).not.toMatch(/\/blog|\/private|nim-fawn/)
})

test('CV exposes the shared Open Graph card with its own page URL', async ({
  request,
}) => {
  const cv = await (await request.get('/cv')).text()
  expect(cv).toContain(`property="og:url" content="${site}/cv"`)
  expect(cv).toContain(`property="og:image" content="${site}/opengraph-image"`)
  expect(cv).toContain('property="og:image:width" content="1200"')
  expect(cv).toContain('property="og:image:height" content="630"')
  expect(cv).toContain(
    'property="og:image:alt" content="Adib El Ounani — Software engineer and NYU Shanghai graduate"',
  )
  expect(cv).toContain('property="og:site_name" content="Adib El Ounani"')
})

test('CV has a distinct canonical and template sample is not indexed', async ({
  request,
}) => {
  const cv = await (await request.get('/cv')).text()
  expect(cv).toContain(`<link rel="canonical" href="${site}/cv"`)
  expect(cv).toContain('<title>CV | Adib El Ounani</title>')
  const sample = await (
    await request.get(
      '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    )
  ).text()
  expect(sample).toContain('name="robots" content="noindex, nofollow"')
  expect(sample).toContain('Template example')
})

test('unknown pages return a noindex 404 with useful recovery links', async ({
  request,
}) => {
  const response = await request.get('/this-page-does-not-exist')
  expect(response.status()).toBe(404)
  const html = await response.text()
  expect(html).toContain('Page not found')
  expect(html).toContain('Back to portfolio')
  expect(html).toContain('name="robots" content="noindex"')
  expect(html).toContain('aria-label="Page recovery"')
  expect(html).toContain('href="/#experience"')
  expect(html).toContain('href="/#contact"')
  expect(html).toContain('href="/cv"')
  expect(html).toContain('id="main-content"')
})

test('standalone server serves its CSS assets successfully', async ({
  request,
}) => {
  const html = await (await request.get('/')).text()
  const paths = [...html.matchAll(/href="([^" ]+\.css(?:\?[^" ]*)?)"/g)].map(
    (match) => match[1],
  )
  expect(paths.length).toBeGreaterThan(0)
  for (const path of paths) {
    const asset = await request.get(path)
    expect(asset.status()).toBe(200)
    expect(asset.headers()['content-type']).toContain('text/css')
  }
})
