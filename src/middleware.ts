/**
 * Func: Middleware untuk protect secure routes
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check jika user mengakses secure routes
  if (pathname.startsWith('/d') || pathname.startsWith('/office')) {
    // Check cookie _U untuk autentikasi
    const userCookie = request.cookies.get('_U')

    if (!userCookie) {
      // Redirect ke signin jika tidak ada cookie
      return NextResponse.redirect(new URL('/auth', request.url))
    }
  }

  // Check jika user sudah login dan mengakses signin page
  if (pathname === '/auth') {
    const userCookie = request.cookies.get('_U')

    if (userCookie) {
      // Redirect ke dashboard jika sudah login
      return NextResponse.redirect(new URL('/d', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
