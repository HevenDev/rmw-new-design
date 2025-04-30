import { NextRequest, NextResponse } from "next/server";
import { getDBPool } from "@/lib/db";

const db = getDBPool();

// Helper function to convert "digital-marketing" -> "Digital Marketing"
function slugToName(slug: string): string {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function GET(
  req: NextRequest,
  context: { params: { category_api: string } }
) {
  const { category_api } = await context.params;
  const categoryName = slugToName(category_api); // Convert slug to Name

  try {
    const [rows] = await db.query(
      `
      SELECT 
        b.title, 
        b.blog_image, 
        b.slug
      FROM blogs b
      INNER JOIN categories c ON b.category_id = c.id
      WHERE c.name = ?
      ORDER BY b.id DESC
      `,
      [categoryName]
    );

    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
