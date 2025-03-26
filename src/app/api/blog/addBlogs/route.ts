import { NextRequest, NextResponse } from "next/server";
import { IncomingMessage } from "http";
import formidable, { Fields, Files } from "formidable";
import fs from "fs";
import path from "path";
import { getDBPool } from "@/lib/db";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Function to convert NextRequest to IncomingMessage
const convertNextRequestToNodeRequest = async (
  req: NextRequest
): Promise<IncomingMessage> => {
  const body = await req.body?.getReader().read();
  const nodeReq = Object.create(req);
  nodeReq.headers = Object.fromEntries(req.headers.entries());
  nodeReq.method = req.method;
  nodeReq.url = req.url;
  nodeReq.body = body ? Buffer.from(body.value || []) : undefined;
  return nodeReq as IncomingMessage;
};

export async function POST(req: NextRequest) {
  try {
    const nodeReq = await convertNextRequestToNodeRequest(req);
    const form = formidable({ multiples: false });

    return new Promise((resolve, reject) => {
      form.parse(nodeReq, async (err: any, fields: Fields, files: Files) => {
        if (err) {
          reject(
            NextResponse.json(
              { success: false, message: "File parsing error" },
              { status: 500 }
            )
          );
          return;
        }

        // Extract form data
        const {
          category_id,
          title,
          blog_url,
          youtube_url,
          meta_title,
          meta_description,
          metaKeywords,
          description,
        } = fields as Record<string, any>;

        if (!category_id || !title || !description) {
          reject(
            NextResponse.json(
              { success: false, message: "Missing required fields" },
              { status: 400 }
            )
          );
          return;
        }

        let imagePath = null;
        if (files.blogImage) {
          const file = files.blogImage[0]; // Get first file
          const fileExtension = path.extname(file.originalFilename || "");
          const fileName = `${Date.now()}${fileExtension}`;
          const uploadDir = path.join(process.cwd(), "public", "blogs");

          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
          }

          const filePath = path.join(uploadDir, fileName);
          fs.renameSync(file.filepath, filePath);

          imagePath = `/blogs/${fileName}`;
        }

        // Save data in MySQL
        const db = getDBPool();
        await db.execute(
          `INSERT INTO blogs (category_id, title, blog_url, youtube_url, meta_title, meta_description, metaKeywords, description, blogImage) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            category_id,
            title,
            blog_url,
            youtube_url,
            meta_title,
            meta_description,
            metaKeywords,
            description,
            imagePath,
          ]
        );

        resolve(
          NextResponse.json(
            { success: true, message: "Blog added successfully" },
            { status: 200 }
          )
        );
      });
    });
  } catch (error) {
    console.error("Error adding blog:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
