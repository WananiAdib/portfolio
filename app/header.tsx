import Link from 'next/link'
import { CutSeal } from '@/components/cut-seal'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.identity}
        aria-label="Adib El Ounani — home"
      >
        <CutSeal decorative className={styles.seal} />
        <span className={styles.wordmark}>
          <span className={styles.name}>Adib El Ounani</span>
          <span className={styles.role}>AI Engineer</span>
        </span>
      </Link>
    </header>
  )
}
