import { ContactActions } from '@/components/contact-actions'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS } from './data'

function SocialLink({ label, link }: { label: string; link: string }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="inline-flex min-h-11 items-center gap-1 rounded-full bg-zinc-100 px-3 py-2 text-sm text-black transition-colors hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {label}
        <span aria-hidden="true">↗</span>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const experience = [...WORK_EXPERIENCE].reverse()

  return (
    <main id="main-content" tabIndex={-1} className="space-y-20">
      <h1 className="sr-only">Adib El Ounani — Portfolio</h1>
      <section
        id="about"
        aria-label="About"
        className="reveal-section scroll-mt-8"
      >
        <p className="text-zinc-600 dark:text-zinc-400">
          Software engineer and NYU Shanghai grad with a global perspective,
          blending UK, USA, and Chinese tech vibes.
        </p>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="reveal-section scroll-mt-8"
      >
        <h2 id="experience-heading" className="mb-2 text-lg font-medium">
          Work Experience
        </h2>
        <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
          Most recent first
        </p>
        <ol
          className="space-y-3"
          aria-label="Work experience, most recent first"
        >
          {experience.map((job) => (
            <li key={job.id} id={job.id} className="scroll-mt-8">
              <article className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-px dark:bg-zinc-600/30">
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-medium dark:text-zinc-100">
                        <a
                          href={`#${job.id}`}
                          className="rounded underline decoration-transparent underline-offset-4 hover:decoration-current"
                          aria-label={`${job.title} at ${job.company}, permalink`}
                        >
                          {job.title}
                        </a>
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                    <div className="shrink-0 text-sm text-zinc-600 dark:text-zinc-400">
                      <p>
                        {job.start} – {job.end}
                      </p>
                      {job.end === 'Present' && (
                        <span className="mt-1 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                          Current role
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="reveal-section scroll-mt-8"
      >
        <h2 id="contact-heading" className="mb-5 text-lg font-medium">
          Connect
        </h2>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a
            className="break-all underline underline-offset-4"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
        </p>
        <ContactActions />
        <ul
          className="flex flex-wrap items-center gap-3"
          aria-label="Social profiles"
        >
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <SocialLink {...link} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
