import { NextRequest, NextResponse } from "next/server";
import { getDBPool } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const category = formData.get("category") as string;
    const message = formData.get("message") as string;
    const resumePath = formData.get("resumePath") as string;

    // Validate required fields
    if (!name || !email || !phone || !category || !resumePath) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
    }

    const pool = getDBPool();

    await pool.execute(
        "INSERT INTO queries (name, email, phone, category, resume, message) VALUES (?, ?, ?, ?, ?, ?)",
        [name, email, phone, category, resumePath, message]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ success: false, error: (error as any).message }, { status: 500 });
  }
}
