import { NextResponse } from "next/server";
import { z } from "zod";

import { supabaseAdmin } from "@/lib/supabase/server";

const MAX_FILES = 5;
const MAX_FILE_SIZE = 8 * 1024 * 1024;

const ALLOWED_FILE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
]);

const optionalText = z
  .string()
  .trim()
  .max(500)
  .optional()
  .or(z.literal(""));

const quoteSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  companyName: optionalText,

  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(5).max(50),

  service: z.string().trim().min(1).max(120),
  projectType: z.string().trim().min(1).max(120),
  location: z.string().trim().min(2).max(250),

  spaceSize: optionalText,

  timeline: z.string().trim().min(1).max(120),
  budget: z.string().trim().min(1).max(120),

  projectDescription: z.string().trim().min(10).max(5000),

  consent: z.literal("true"),
});

function safeFileName(fileName: string) {
  const cleaned = fileName
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return cleaned || "reference-file";
}

export async function POST(request: Request) {
  const uploadedPaths: string[] = [];

  try {
    const formData = await request.formData();

    const parsed = quoteSchema.safeParse({
      fullName: String(formData.get("fullName") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      location: String(formData.get("location") ?? ""),
      spaceSize: String(formData.get("spaceSize") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      projectDescription: String(
        formData.get("projectDescription") ?? "",
      ),
      consent: String(formData.get("consent") ?? ""),
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const files = formData
      .getAll("referenceFiles")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        {
          success: false,
          message: `You can upload a maximum of ${MAX_FILES} reference files.`,
        },
        { status: 400 },
      );
    }

    for (const file of files) {
      if (!ALLOWED_FILE_TYPES.has(file.type)) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Reference files must be JPG, PNG, WEBP or PDF.",
          },
          { status: 400 },
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message: "Each reference file must be 8 MB or smaller.",
          },
          { status: 400 },
        );
      }
    }

    const enquiryId = crypto.randomUUID();
    const referenceFiles: {
      bucket: string;
      path: string;
      name: string;
      type: string;
      size: number;
    }[] = [];

    for (const file of files) {
      const storagePath = `${enquiryId}/${crypto.randomUUID()}-${safeFileName(
        file.name,
      )}`;

      const fileBuffer = await file.arrayBuffer();

      const { error: uploadError } = await supabaseAdmin.storage
        .from("quote-references")
        .upload(storagePath, fileBuffer, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        throw new Error(
          `Reference file upload failed: ${uploadError.message}`,
        );
      }

      uploadedPaths.push(storagePath);

      referenceFiles.push({
        bucket: "quote-references",
        path: storagePath,
        name: file.name,
        type: file.type,
        size: file.size,
      });
    }

    const {
      fullName,
      companyName,
      email,
      phone,
      service,
      projectType,
      location,
      spaceSize,
      timeline,
      budget,
      projectDescription,
    } = parsed.data;

    const { error: databaseError } = await supabaseAdmin
      .from("project_enquiries")
      .insert({
        id: enquiryId,
        enquiry_type: "quote",
        full_name: fullName,
        email,
        phone,
        company_name: companyName || null,
        service,
        project_type: projectType,
        project_location: location,
        space_size: spaceSize || null,
        timeline,
        budget,
        project_details: projectDescription,
        reference_files: referenceFiles,
        status: "new",
        source: "website",
      });

    if (databaseError) {
      throw new Error(
        `Quote database insert failed: ${databaseError.message}`,
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your quotation request has been received.",
      },
      { status: 201 },
    );
  } catch (error) {
    /*
     * If file upload succeeded but the database operation later failed,
     * remove those files so we do not leave orphaned uploads in Storage.
     */
    if (uploadedPaths.length > 0) {
      const { error: cleanupError } = await supabaseAdmin.storage
        .from("quote-references")
        .remove(uploadedPaths);

      if (cleanupError) {
        console.error(
          "Quote reference cleanup error:",
          cleanupError,
        );
      }
    }

    console.error("Quote API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not submit your quotation request right now. Please try again.",
      },
      { status: 500 },
    );
  }
}