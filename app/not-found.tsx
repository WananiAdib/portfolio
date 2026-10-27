import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="space-y-6 py-6">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        404
      </p>
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        This link may have moved or no longer exist. You can return to the
        portfolio or jump to one of these sections.
      </p>
      <Link
        className="inline-flex min-h-11 items-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
        href="/"
      >
        Back to portfolio
      </Link>
      <nav
        aria-label="Page recovery"
        className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
      >
        <Link
          className="inline-flex min-h-11 items-center underline underline-offset-4"
          href="/#experience"
        >
          Work experience
        </Link>
        <Link
          className="inline-flex min-h-11 items-center underline underline-offset-4"
          href="/#contact"
        >
          Contact
        </Link>
        <Link
          className="inline-flex min-h-11 items-center underline underline-offset-4"
          href="/cv"
        >
          Printable CV
        </Link>
      </nav>
    </main>
  )
}
