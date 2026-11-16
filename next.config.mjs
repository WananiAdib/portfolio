import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  skipTrailingSlashRedirect: true,
  async rewrites() {
    const host =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com'
    if (
      !['https://eu.i.posthog.com', 'https://us.i.posthog.com'].includes(host)
    ) {
      throw new Error(
        'NEXT_PUBLIC_POSTHOG_HOST must be the EU or US PostHog ingestion URL',
      )
    }
    const assetsHost = host.replace('.i.posthog.com', '-assets.i.posthog.com')

    return [
      {
        source: '/ingest/static/:path*',
        destination: `${assetsHost}/static/:path*`,
      },
      {
        source: '/ingest/array/:path*',
        destination: `${assetsHost}/array/:path*`,
      },
      { source: '/ingest/:path*', destination: `${host}/:path*` },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
