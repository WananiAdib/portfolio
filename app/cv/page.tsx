import type { Metadata } from 'next'
import Link from 'next/link'
import { EMAIL, SOCIAL_LINKS, WORK_EXPERIENCE } from '@/app/data'
import { PrintButton } from '@/components/print-button'
import { SITE_NAME, SITE_SOCIAL_IMAGE } from '@/lib/site'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'CV',
  alternates: { canonical: '/cv' },
  openGraph: {
    title: 'CV — Adib El Ounani',
    description: 'Work experience and contact details for Adib El Ounani.',
    url: '/cv',
    siteName: SITE_NAME,
    type: 'website',
    images: [SITE_SOCIAL_IMAGE],
  },
  description: 'Work experience and contact details for Adib El Ounani.',
}

export default function CVPage() {
  const experience = [...WORK_EXPERIENCE].reverse()

  return (
    <main id="main-content" tabIndex={-1} className={styles.cv}>
      <div className="mb-8 flex flex-wrap items-center gap-4 print:hidden">
        <Link className="underline underline-offset-4" href="/">
          ← Portfolio
        </Link>
        <PrintButton />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Use your browser’s print dialog to save a PDF.
        </p>
      </div>
      <h1 className="text-3xl font-semibold">Adib El Ounani</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Software engineer and NYU Shanghai grad with a global perspective,
        blending UK, USA, and Chinese tech vibes.
      </p>
      <address className="mt-4 not-italic">
        <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <ul className="mt-2 space-y-1 text-sm">
          {SOCIAL_LINKS.map(({ label, link }) => (
            <li key={label}>
              <a className="break-all underline underline-offset-4" href={link}>
                {label}: {link}
              </a>
            </li>
          ))}
        </ul>
      </address>
      <section className="mt-10" aria-labelledby="cv-experience">
        <h2 id="cv-experience" className="mb-5 text-xl font-medium">
          Work Experience
        </h2>
        <ol className="space-y-6">
          {experience.map((job) => (
            <li key={job.id} className={styles.job}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">{job.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {job.start} – {job.end}
                </p>
              </div>
              <p>{job.company}</p>
            </li>
          ))}
        </ol>
      </section>
      <p className="mt-10 text-xs text-zinc-500">
        A concise view of the experience published on this portfolio.
      </p>
    </main>
  )
}
