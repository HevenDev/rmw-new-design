import { NextRequest, NextResponse } from "next/server";
import { getDBPool } from "@/lib/db";
import { RowDataPacket } from "mysql2";

export async function GET(req: NextRequest, context: { params?: { blog_slug?: string } }) {
  try {
    // ✅ Await params if Next.js requires it
    const { blog_slug } = await Promise.resolve(context.params || {});

    if (!blog_slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const db = getDBPool();

    const [rows] = await db.execute<RowDataPacket[]>(
      "SELECT * FROM blogs WHERE slug = ? LIMIT 1",
      [decodeURIComponent(blog_slug)]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog: rows[0] }, { status: 200 });

  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
