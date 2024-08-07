import * as yup from "yup";

// Validation schema for email field
const email = yup
  .string()
  .email("Email must be a valid email")
  .required("Email is required");

// Validation schema for password field
const password = yup.string().required("Password is required");

// Validation schema for confirmPassword field, ensuring it matches the password field
const confirmPassword = yup
  .string()
  .oneOf([yup.ref("password")], "Passwords do not match");

// Complete validation schema for the sign-up form
export const SignUpValidationSchema = yup.object().shape({
  email: email,
  password: password,
  confirmPassword: confirmPassword,
});
