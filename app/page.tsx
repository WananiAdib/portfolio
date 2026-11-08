import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import {
  BLOG_POSTS,
  OBFUSCATED_EMAIL,
  PROJECTS,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
} from './data'
import styles from './page.module.css'

export default function Personal() {
  return (
    <main id="main-content" className={styles.index}>
      <div className={styles.intro}>
        <h1>I build AI tools and the software around them.</h1>
        <p>Currently at Ylookup. Previously Nolana AI, Blacty, and Kaedim.</p>
      </div>
      <div className={styles.columns}>
        <div className={styles.primary}>
          <section aria-labelledby="projects-heading" id="projects">
            <h2 id="projects-heading">Selected projects</h2>
            <ul className={styles.projects}>
              {PROJECTS.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.project}
                  >
                    <span className={styles.projectTitle}>
                      {project.name}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </span>
                    {project.status && (
                      <span className={styles.status}>{project.status}</span>
                    )}
                  </a>
                  {project.description && (
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="writing-heading" id="writing">
            <h2 id="writing-heading">Writing</h2>
            {BLOG_POSTS.length ? (
              <ul className={styles.posts}>
                {BLOG_POSTS.map((post) => (
                  <li key={post.uid}>
                    <Link href={post.link}>{post.title}</Link>
                    <p>{post.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.muted}>Coming soon.</p>
            )}
          </section>
          <section aria-labelledby="experience-heading" id="experience">
            <h2 id="experience-heading">Experience</h2>
            <ol className={styles.experience}>
              {[...WORK_EXPERIENCE].reverse().map((job) => (
                <li key={job.id}>
                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.title}</p>
                  </div>
                  <span className={styles.dates}>
                    {job.start} — {job.end}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <aside className={styles.secondary} aria-label="Links and background">
          <section aria-labelledby="elsewhere-heading">
            <h2 id="elsewhere-heading">Elsewhere</h2>
            <ul className={styles.links}>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li className={styles.email}>
                <span>Email</span>
                <span className={styles.emailAddress}>{OBFUSCATED_EMAIL}</span>
              </li>
            </ul>
          </section>
          <section aria-labelledby="background-heading">
            <h2 id="background-heading">Background</h2>
            <p className={styles.muted}>NYU Shanghai graduate.</p>
            <p className={styles.background}>
              A global perspective across the UK, USA, and China.
            </p>
          </section>
        </aside>
      </div>
    </main>
  )
}
