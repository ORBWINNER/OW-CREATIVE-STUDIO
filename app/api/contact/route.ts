import { NextResponse } from "next/server";
import { z } from "zod";

import { supabaseAdmin } from "@/lib/supabase/server";

const optionalText = z
  .string()
  .trim()
  .max(500)
  .optional()
  .or(z.literal(""));

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  phone: optionalText,

  service: z
    .string()
    .trim()
    .min(1, "Please select a service.")
    .max(120),

  projectDetails: z
    .string()
    .trim()
    .min(10, "Please provide a little more information about your project.")
    .max(5000, "Project details are too long."),

  timeline: optionalText,

  budget: optionalText,

  consent: z.literal(true),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    const {
      name,
      email,
      phone,
      service,
      projectDetails,
      timeline,
      budget,
    } = result.data;

    const { error } = await supabaseAdmin
      .from("project_enquiries")
      .insert({
        enquiry_type: "contact",
        full_name: name,
        email,
        phone: phone || null,
        company_name: null,
        service,
        project_type: null,
        project_location: null,
        space_size: null,
        timeline: timeline || null,
        budget: budget || null,
        project_details: projectDetails,
        reference_files: [],
        status: "new",
        source: "website",
      });

    if (error) {
      console.error("Contact enquiry database error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We could not submit your enquiry right now. Please try again.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your enquiry. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}