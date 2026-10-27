'use client'

import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useId, useState } from 'react'

const THEMES_OPTIONS = [
  { label: 'Light', id: 'light', icon: SunIcon },
  { label: 'Dark', id: 'dark', icon: MoonIcon },
  { label: 'System', id: 'system', icon: MonitorIcon },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const id = useId()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div aria-hidden="true" className="h-11 w-36" />

  return (
    <fieldset className="flex gap-1">
      <legend className="sr-only">Color theme</legend>
      {THEMES_OPTIONS.map((option) => {
        const Icon = option.icon
        return (
          <label key={option.id} className="relative cursor-pointer">
            <input
              className="peer sr-only"
              type="radio"
              name={`theme-${id}`}
              value={option.id}
              checked={theme === option.id}
              onChange={() => setTheme(option.id)}
              aria-label={`${option.label} theme`}
            />
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-zinc-500 peer-checked:border-zinc-400 peer-checked:bg-zinc-100 peer-checked:text-zinc-950 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 dark:text-zinc-400 dark:peer-checked:bg-zinc-800 dark:peer-checked:text-zinc-50"
              title={`${option.label} theme`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
          </label>
        )
      })}
    </fieldset>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-100 py-4 dark:border-zinc-800">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Adib El Ounani</p>
          <a
            className="inline-flex min-h-8 items-center underline underline-offset-4"
            href="https://github.com/ibelick/nim"
          >
            Built with Nim and Motion-Primitives.
          </a>
        </div>
        <ThemeSwitch />
      </div>
    </footer>
  )
}
