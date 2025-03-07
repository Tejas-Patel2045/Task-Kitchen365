import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('user')?.value;

    if (!currentUser && request.nextUrl.pathname.startsWith('/products')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/products/:path*', '/products/new'],
};