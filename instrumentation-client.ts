import posthog from 'posthog-js'

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com'

if (key) {
  posthog.init(key, {
    api_host: '/ingest',
    ui_host: host.replace('.i.posthog.com', '.posthog.com'),
    defaults: '2025-05-24',
    person_profiles: 'identified_only',
    disable_session_recording: true,
  })
}
