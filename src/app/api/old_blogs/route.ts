import { NextResponse } from "next/server";
import {getDBPool} from "@/lib/db";

export async function GET() {
  try {
    const db = getDBPool();
    const [rows] = await db.query("SELECT * FROM old_blogs");
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("old blog data fetching error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
