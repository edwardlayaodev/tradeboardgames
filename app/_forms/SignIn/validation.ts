import * as yup from "yup";

// Validation schema for email field
const email = yup
  .string()
  .email("Email must be a valid email")
  .required("Email is required");

// Validation schema for password field
const password = yup.string().required("Password is required");

// Complete validation schema for the sign-in form
export const SignInValidationSchema = yup.object().shape({
  email: email,
  password: password,
});
