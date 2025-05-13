import { NextResponse } from "next/server";
import { getDBPool } from "@/lib/db";

export async function GET() {
  try {
    const pool = getDBPool();
    const [rows]: any = await pool.query("SELECT * FROM queries ORDER BY id DESC");

    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Failed to fetch submissions:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch data" });
  }
}
