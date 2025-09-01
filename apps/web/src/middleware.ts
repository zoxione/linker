import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname !== "/auth") {
  //   const session = await ky
  //     .get<{ session: Session; user: User } | null>(`${appConfig.apiAppUrl}/api/auth/get-session`, {
  //       headers: {
  //         cookie: request.headers.get("cookie") || "",
  //       },
  //     })
  //     .json();

  //   if (!session) {
  //     return NextResponse.redirect(new URL("/auth", request.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
