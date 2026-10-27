import { ImageResponse } from 'next/og'
import { SITE_NAME } from '@/lib/site'

export const alt =
  'Adib El Ounani — Software engineer and NYU Shanghai graduate'
export const size = { width: 1200, height: 630 }
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
