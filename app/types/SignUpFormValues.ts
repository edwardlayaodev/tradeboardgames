/**
 * Interface for the form values.
 * @param {string} email - The email value.
 * @param {string} password - The password value.
 * @param {string} confirmPassword - The confirm password value.
 */
export default interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}
