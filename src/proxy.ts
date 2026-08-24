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
  matcher: '/((?!_next/static|_next/image|favicon.ico|coming-soon).*)',
}
