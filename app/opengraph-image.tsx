import { ImageResponse } from 'next/og'
import { SITE_NAME, SITE_SOCIAL_IMAGE } from '@/lib/site'

export const alt = SITE_SOCIAL_IMAGE.alt
export const size = {
  width: SITE_SOCIAL_IMAGE.width,
  height: SITE_SOCIAL_IMAGE.height,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#18181b',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, color: '#a1a1aa' }}>
          PORTFOLIO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: '-3px',
            }}
          >
            {SITE_NAME}
          </div>
          <div style={{ display: 'flex', fontSize: 30, color: '#d4d4d8' }}>
            Software engineer · NYU Shanghai graduate
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 25, color: '#a1a1aa' }}>
          wananiadib.com
        </div>
      </div>
    ),
    size,
  )
}
