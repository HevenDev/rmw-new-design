import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const profileImages: string[] = [
  "/profile-images/img-1.webp",
  "/profile-images/img-2.webp",
  "/profile-images/img-3.webp",
  "/profile-images/img-4.webp",
  "/profile-images/img-5.webp",
  "/profile-images/img-6.webp",
];

const getRandomImage = (): string =>
  profileImages[Math.floor(Math.random() * profileImages.length)];

export async function GET(req: NextRequest) {
  try {
    // Get token from cookies
    const token = req.cookies.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify JWT
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET is missing!");
      return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }

    const decoded = jwt.verify(token, secret) as { name: string };

    return NextResponse.json({
      name: decoded.name,
      profileImage: getRandomImage(),
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
