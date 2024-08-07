import { EmailOtpType } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/app/_utils/supabase/server";

/**
 * Handles the GET request for verifying email OTP.
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} The response object.
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = "/account"; // Default next path after successful verification

  // Create a clone of the request URL for redirection
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");

  // Verify OTP if token_hash and type are provided
  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    // If verification succeeds, redirect to the next path
    if (!error) {
      redirectTo.searchParams.delete("next");
      return NextResponse.redirect(redirectTo);
    }
  }

  // Redirect to the error page if verification fails or parameters are missing
  redirectTo.pathname = "/error";
  return NextResponse.redirect(redirectTo);
}
