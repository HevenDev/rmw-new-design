import { NextResponse } from "next/server";
import { getDBPool } from "@/lib/db";

export async function DELETE(req: Request) {
  try {
    const { blog_slug } = await req.json();

    if (!blog_slug) {
      return NextResponse.json({ error: "Blog slug is required" }, { status: 400 });
    }

    const pool = await getDBPool();

    // Check if blog exists
    const [existingBlog]: any = await pool.query("SELECT * FROM blogs WHERE slug = ?", [blog_slug]);

    if (!existingBlog.length) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Delete blog
    await pool.query("DELETE FROM blogs WHERE slug = ?", [blog_slug]);

    return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
