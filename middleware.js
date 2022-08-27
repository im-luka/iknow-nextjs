import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  // console.log(url, token, pathname, req);

  console.log(token);
  console.log(pathname);
  console.log(req);

  // if (pathname.includes("/api/auth") || token) {
  //   return NextResponse.next();
  // }

  // if (!token && pathname.includes("/music/4you")) {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }

  // if (pathname.startsWith("/_next") || pathname.includes(".")) {
  //   console.log("tu");
  //   return;
  // }

  // if (pathname.includes("/api/auth") || token) {
  //   // return NextResponse.next("/music/4you");
  //   return NextResponse.next();
  // }

  // if (!token && pathname.includes("/music/4you")) {
  //   console.log("sad");

  //   const loginUrl = new URL("/auth/login", req.url);
  //   return NextResponse.redirect(loginUrl);
  // }
}
