import { auth } from "@/lib/auth-helper";
import { NextResponse } from "next/server";

export default auth((req) => {
  const session = req.auth;
  const isLoggedIn = !!session;
  const pathname = req.nextUrl.pathname;

  // Public routes (accessible without login)
  const publicRoutes = ["/", "/login", "/register"];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Redirect logged-in users away from login/register pages
  if (isLoggedIn && (pathname === "/login" || pathname === "/register")) {
    const dashboardRoute =
      session.user.role === "FREELANCER" 
        ? "/admin/dashboard"
        : "/client/dashboard";
    return NextResponse.redirect(new URL(dashboardRoute, req.nextUrl));
  }

  // Allow public routes
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Require authentication for all protected routes
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  const userRole = session.user.role;

  // Admin routes - only FREELANCER and ADMIN can access
  if (pathname.startsWith("/admin")) {
    if (userRole !== "FREELANCER" ) {
      // Redirect clients to their dashboard
      return NextResponse.redirect(new URL("/client/dashboard", req.nextUrl));
    }
    return NextResponse.next();
  }

  // Client routes - only CLIENT can access
  if (pathname.startsWith("/client")) {
    if (userRole !== "CLIENT") {
      // Redirect freelancers/admins to admin dashboard
      return NextResponse.redirect(new URL("/admin/dashboard", req.nextUrl));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};