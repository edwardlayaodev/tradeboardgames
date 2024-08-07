import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/app/_utils/supabase/server";
import { validateEmail, validatePassword } from "@/app/_utils/validators";

/**
 * Handles the POST request for user login.
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} The response object.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();

    const body = await req.json();
    const { email, password } = body.data;

    // Check if email and password are provided
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Validate password length
    if (!validatePassword(password)) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long." },
        { status: 400 }
      );
    }

    // Attempt to sign in with email and password
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // Check for authentication error
    if (error) {
      return NextResponse.json(
        { error: "Invalid Username or Password" },
        { status: 401 }
      );
    }

    // Return success response
    return NextResponse.json(
      { message: "Login Successful, Redirecting" },
      { status: 200 }
    );
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: "Invalid request body.", message: error },
      { status: 400 }
    );
  }
}
