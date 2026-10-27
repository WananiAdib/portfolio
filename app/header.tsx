import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-10 space-y-5">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Adib El Ounani
        </Link>
        <p className="text-zinc-600 dark:text-zinc-400">Full Stack Engineer</p>
      </div>
      <nav
        aria-label="Primary"
        className="-ml-3 flex flex-wrap gap-1 text-sm text-zinc-600 dark:text-zinc-400"
      >
        <Link
          className="inline-flex min-h-11 items-center rounded-lg px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          href="/#about"
        >
          About
        </Link>
        <Link
          className="inline-flex min-h-11 items-center rounded-lg px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          href="/#experience"
        >
          Experience
        </Link>
        <Link
          className="inline-flex min-h-11 items-center rounded-lg px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          href="/#contact"
        >
          Contact
        </Link>
        <Link
          className="inline-flex min-h-11 items-center rounded-lg px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          href="/cv"
        >
          CV
        </Link>
      </nav>
    </header>
  )
}
