'use client'

export function PrintButton() {
  return (
    <button
      type="button"
      className="min-h-11 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-zinc-700 dark:hover:bg-zinc-800"
      onClick={() => window.print()}
    >
      Print or save PDF
    </button>
  )
}
