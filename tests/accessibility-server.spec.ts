import { expect, test } from '@playwright/test'

test('homepage ships readable content, landmarks, skip navigation and real anchors in HTML', async ({
  request,
}) => {
  const response = await request.get('/')
  expect(response.status()).toBe(200)
  const html = await response.text()
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] ?? ''
  expect(main).toContain('id="main-content"')
  expect(main).toContain('tabindex="-1"')
  expect(main).toContain('Software engineer and NYU Shanghai grad')
  expect(main).not.toContain('opacity:0')
  expect(main).not.toContain('blur(8px)')
  expect(html).toContain('href="#main-content"')
  expect(html).toContain('aria-label="Primary"')
  for (const anchor of ['about', 'experience', 'contact']) {
    expect(html).toContain(`href="/#${anchor}"`)
    expect(main).toContain(`id="${anchor}"`)
  }
  expect(main.match(/<h1\b/g)).toHaveLength(1)
  expect(main.match(/<h2\b/g)).toHaveLength(2)
})

test('timeline presents the current role first, preserves all facts, and supplies stable permalinks', async ({
  request,
}) => {
  const html = await (await request.get('/')).text()
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] ?? ''
  const companies = ['Ylookup', 'Nolana AI', 'Blacty', 'Kaedim']
  const positions = companies.map((company) => main.indexOf(company))
  expect(positions.every((position) => position >= 0)).toBe(true)
  expect(positions).toEqual([...positions].sort((a, b) => a - b))
  expect(main.match(/Current role/g)).toHaveLength(1)
  expect(main).toContain('Jul 2026')
  expect(main).toContain('Present')
  for (const id of ['work1', 'work2', 'work3', 'work4']) {
    expect(main).toContain(`id="${id}"`)
    expect(main).toContain(`href="#${id}"`)
  }
  expect(main).not.toContain('Selected Projects')
  expect(main).not.toContain('Exploring the Intersection')
})

test('header and footer remain readable without waiting for animated text', async ({
  request,
}) => {
  const html = await (await request.get('/')).text()
  const header = html.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? ''
  const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] ?? ''
  expect(header).toContain('Adib El Ounani')
  expect(header).toContain('Full Stack Engineer')
  expect(header).not.toContain('opacity:0')
  expect(footer).toContain('Built with Nim and Motion-Primitives.')
  expect(footer).toContain('https://github.com/ibelick/nim')
})
