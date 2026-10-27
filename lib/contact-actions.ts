export type ShareResult =
  | { kind: 'shared' | 'copied' | 'canceled' }
  | { kind: 'manual'; url: string }

type ShareCapabilities = {
  share?: (data: ShareData) => Promise<void>
  clipboard?: Pick<Clipboard, 'writeText'>
}

export function portfolioShareUrl(href: string) {
  return new URL('/', href).href
}

export async function sharePortfolioLink(
  capabilities: ShareCapabilities,
  url: string,
): Promise<ShareResult> {
  try {
    if (capabilities.share) {
      await capabilities.share({ title: 'Adib El Ounani — Portfolio', url })
      return { kind: 'shared' }
    }
    if (!capabilities.clipboard) return { kind: 'manual', url }
    await capabilities.clipboard.writeText(url)
    return { kind: 'copied' }
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return { kind: 'canceled' }
    }
    return { kind: 'manual', url }
  }
}
