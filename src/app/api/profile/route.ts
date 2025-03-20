import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getDBPool } from "@/lib/db";

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
  const db = getDBPool();
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

    const decoded = jwt.verify(token, secret) as { email: string };
    const email = decoded.email;
    
    const [rows]: any = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length > 0) {
      const user = rows[0];
      return NextResponse.json({
        email: user.email,
        name: user.name, 
        phone: user.phone, 
        createdAt: user.created_at, 
        profileImage: getRandomImage(), 
      });
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
