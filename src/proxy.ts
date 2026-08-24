import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const MAIN_DOMAINS = new Set(['hinovi.me', 'www.hinovi.me'])

export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase()

  if (MAIN_DOMAINS.has(host)) {
    return NextResponse.rewrite(new URL('/coming-soon', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher:
    '/((?!_next|coming-soon|favicon\\.ico|robots\\.txt|sitemap\\.xml|site\\.webmanifest|manifest\\.json|.*\\.(?:png|jpe?g|gif|svg|webp|avif|ico|bmp|tiff?|woff2?|ttf|otf|eot|mp4|webm|mov|mp3|wav|ogg|pdf|zip|json|xml|txt|map|csv)$).*)',
}
