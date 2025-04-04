import { NextResponse } from "next/server";
import { getDBPool } from "@/lib/db";

// ✅ GET: Fetch visitor data for Pie Chart
export async function GET() {
  try {
    const pool = await getDBPool();
    const [rows]: any = await pool.query(`
      SELECT browser, SUM(visitors) AS visitors FROM visit_logs GROUP BY browser
    `);
    
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching visitor data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
