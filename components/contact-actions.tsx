'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { EMAIL } from '@/app/data'
import { portfolioShareUrl, sharePortfolioLink } from '@/lib/contact-actions'

const actionClass =
  'inline-flex min-h-11 items-center rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-zinc-700 dark:hover:bg-zinc-800'

export function ContactActions() {
  const [message, setMessage] = useState('')
  const [manualLink, setManualLink] = useState('')
  const [busy, setBusy] = useState(false)
  const inFlight = useRef(false)

  async function copyEmail() {
    setMessage('')
    try {
      await navigator.clipboard.writeText(EMAIL)
      setMessage('Email address copied.')
    } catch {
      setMessage(
        'Copy is unavailable. Select the email address above to copy it, or choose Email me.',
      )
    }
  }

  async function sharePortfolio() {
    if (inFlight.current) return
    inFlight.current = true
    setBusy(true)
    setMessage('')
    setManualLink('')
    // Share only the homepage, never query strings or the visitor’s current hash.
    const url = portfolioShareUrl(window.location.href)
    const result = await sharePortfolioLink(navigator, url)
    if (result.kind === 'shared') setMessage('Portfolio shared.')
    if (result.kind === 'copied') setMessage('Portfolio link copied.')
    if (result.kind === 'canceled') setMessage('Sharing canceled.')
    if (result.kind === 'manual') {
      setManualLink(result.url)
      setMessage('Sharing is unavailable. Select the link below to copy it.')
    }
    inFlight.current = false
    setBusy(false)
  }

  return (
    <div className="mb-6 space-y-3">
      <div className="flex flex-wrap gap-2">
        <a className={actionClass} href={`mailto:${EMAIL}`}>
          Email me
        </a>
        <button className={actionClass} type="button" onClick={copyEmail}>
          Copy email
        </button>
        <a
          className={actionClass}
          href="/contact.vcf"
          download="adib-el-ounani.vcf"
        >
          Save contact
        </a>
        <Link className={actionClass} href="/cv">
          Printable CV
        </Link>
        <button
          className={actionClass}
          type="button"
          onClick={sharePortfolio}
          disabled={busy}
          aria-busy={busy}
        >
          {busy ? 'Sharing…' : 'Share portfolio'}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="min-h-5 text-sm text-zinc-600 dark:text-zinc-400"
      >
        {message}
      </p>
      {manualLink && (
        <label className="block text-sm">
          Portfolio link
          <input
            className="mt-1 w-full rounded border border-zinc-400 bg-transparent p-2"
            readOnly
            value={manualLink}
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      )}
    </div>
  )
}
