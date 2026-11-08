# Adib El Ounani

Personal portfolio built with Next.js, React, Tailwind CSS, and MDX. The homepage uses a Quiet index layout with the original Cut seal identity, a small project list, experience, and a Writing section ready for future posts.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npx tsc --noEmit` for type checking and `npm run build` for a production build.

## Add projects

Edit `PROJECTS` in `app/data.ts`. SolveAgain is the first entry, linked to https://solveagain.com and marked “In progress”. Add new entries as you work on them:

```ts
{
  id: 'my-project',
  name: 'My project',
  link: 'https://example.com',
  status: 'In progress', // optional
  description: 'What it does.', // optional
}
```

## Publish writing

`BLOG_POSTS` starts empty. The homepage shows “Coming soon.” until a post is ready. The template's demonstration article has been removed; the MDX setup and article layout remain available.

Create `app/blog/<slug>/page.mdx`, then add a matching entry to `BLOG_POSTS` in `app/data.ts`:

```ts
{
  uid: 'my-first-post',
  title: 'My first post',
  description: 'A short introduction.',
  link: '/blog/my-first-post',
}
```

Experience, social links, and the contact email also live in `app/data.ts`.
Keep `OBFUSCATED_EMAIL` in its `[at]` / `[.]` format and render it as plain text, without a `mailto:` link or a decoded address in page data.

## Identity

`components/cut-seal.tsx` renders the approved 23×17 Cut seal as native HTML/CSS grid runs. The negative space spells **أديب الوناني**. It inherits the current text color for light and dark themes, with no image or font dependency for the mark. `app/icon.svg` supplies the matching browser icon.

## Deployment

The Coolify deployment uses the Dockerfile, container port 3000, and no published host port. `wananiadib.com` and `www.wananiadib.com` route through the HTTPS proxy. The health check uses `/` on `127.0.0.1`. The public portfolio is separate from the private Tifin reader.

## Credits

Based on [Nim by Ibelick](https://github.com/ibelick/nim), with [Motion-Primitives](https://motion-primitives.com).
