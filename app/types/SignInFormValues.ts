/**
 * Interface for sign-in form values.
 * Defines the shape of data expected for sign-in.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password for authentication.
 */
export default interface SignInFormValues {
  email: string;
  password: string;
}
