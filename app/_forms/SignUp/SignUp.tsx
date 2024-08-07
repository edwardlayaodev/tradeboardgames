"use client";

import { withFormik } from "formik";
import { SignUpValidationSchema } from "./validation";
import axios from "axios";
import SignUpFormValues from "@/app/types/SignUpFormValues";
import { InnerForm } from "./InnerForm";

/**
 * SignUp component enhanced with Formik for form handling.
 */
const SignUp = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    confirmPassword: "",
  }),

  // Validation schema using Yup
  validationSchema: SignUpValidationSchema,

  /**
   * Handle form submission.
   * @param {FormValues} values - The form values.
   * @param {FormikHelpers<FormValues>} helpers - Formik helpers for managing form state.
   */
  handleSubmit: async (values, helpers) => {
    // Form submission logic
    const data: SignUpFormValues = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    try {
      const res = await axios.post("/auth/register", { data });

      if (res.status === 200) {
        window.location.href = "/";
      }
    } catch (error: any) {
      helpers.setStatus(error.response.data.error);
    }
  },
})(InnerForm);

export default SignUp;
