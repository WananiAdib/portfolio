import { EMAIL, SOCIAL_LINKS } from '@/app/data'

// vCard 3.0 is supported by common desktop and mobile address books.
export function GET() {
  const content = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Adib El Ounani',
    'N:El Ounani;Adib;;;',
    `EMAIL;TYPE=INTERNET:${EMAIL}`,
    ...SOCIAL_LINKS.map(({ link }) => `URL:${link}`),
    'END:VCARD',
    '',
  ].join('\r\n')

  return new Response(content, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="adib-el-ounani.vcf"',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
