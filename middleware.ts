import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Get session token from cookie
  const token = request.cookies.get("authjs.session-token")?.value || 
                request.cookies.get("__Secure-authjs.session-token")?.value;
  
  const isLoggedIn = !!token;

  // Public routes
  if (pathname === "/" || pathname === "/login" || pathname === "/register") {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated
  if (!isLoggedIn && (pathname.startsWith("/admin") || pathname.startsWith("/client"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};