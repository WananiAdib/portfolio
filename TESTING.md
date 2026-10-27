# Local verification

Use Node 20+ and `npm ci`, then:

```sh
npm run lint
npm run typecheck
npm run build
npm run test:logic
npx playwright install chromium
npm run test:e2e
```

The Playwright suite starts a local server on port 3210. To exercise a production build instead, run `PLAYWRIGHT_PRODUCTION=1 npm run test:e2e` after `npm run build` (do not run build and dev against the same `.next` directory concurrently). An existing Chromium binary can be selected with `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

`test:logic` does not launch a browser. It verifies share success/cancellation/fallback behavior, strips query strings from shared URLs, checks vCard serialization, checks the CV response, and verifies server-rendered content, navigation anchors, heading structure, timeline order, and retained attribution. Browser coverage adds clipboard permissions, repeated actions, share dismissal/retry, narrow screens, Back navigation, and print media. A passing HTTP test does **not** prove those browser flows passed.

The ESLint configuration uses the installed Next.js/TypeScript rules. The inherited configuration referenced uninstalled Prettier/MDX plugins, so it could not run; formatting remains available with the installed Prettier CLI. Generated Next.js and browser-report files are ignored.

## Cloud verification limits

The cloud runner's Chromium process may be blocked before launch by `socket() failed: Operation not permitted`. In that case, run logic/HTTP checks and record browser checks as blocked, not passed. Run the browser suite in a browser-capable environment before approving a draft PR.
