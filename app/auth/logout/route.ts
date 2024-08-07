import { createClient } from "@/app/_utils/supabase/server";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles the POST request for user logout.
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} The response object.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = createClient();

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is authenticated, sign them out
  if (user) {
    await supabase.auth.signOut();
  }

  // Invalidate cache for the home page layout
  revalidatePath("/", "layout");

  // Redirect to the sign-in page after logout
  return NextResponse.redirect(new URL("/sign-in", req.url), {
    status: 302,
  });
}
