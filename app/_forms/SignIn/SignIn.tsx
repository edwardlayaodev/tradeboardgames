"use client";

import { withFormik } from "formik";
import { SignInValidationSchema } from "./validation";
import { InnerForm } from "./InnerForm";
import axios from "axios";
import SignInFormValues from "@/app/types/SignInFormValues";

/**
 * SignIn component enhanced with Formik for form handling.
 */
const FormSignIn = withFormik({
  mapPropsToValues: () => {
    return {
      email: "",
      password: "",
    };
  },

  // Validation using Yup
  validationSchema: SignInValidationSchema,

  /**
   * Handle form submission.
   * @param {FormValues} values - The form values.
   * @param {FormikHelpers<SignInFormValues>} helpers - Formik helpers for managing form state.
   */
  handleSubmit: async (values, helpers) => {
    const data: SignInFormValues = {
      email: values.email,
      password: values.password,
    };

    try {
      const res = await axios.post("/auth/login", {
        data,
      });

      if (res.status == 200) {
        window.location.href = "/";
      }
    } catch (error: any) {
      helpers.setStatus(error.response.data.error);
    }
  },
})(InnerForm);

export default FormSignIn;
