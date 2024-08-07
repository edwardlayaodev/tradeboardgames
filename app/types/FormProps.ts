import { ChangeEvent, FocusEvent } from "react";

/**
 * Interface for form component properties.
 * @property {string} label - The label for the form field.
 * @property {string} [placeholder] - The placeholder text for the form field. Optional.
 * @property {any} touched - The touched state of the form field.
 * @property {any} value - The value of the form field.
 * @property {any} errors - The error messages for the form field.
 * @property {string} name - The name attribute for the form field.
 * @property {(event: ChangeEvent<any>) => void} onChangeHandler - The change event handler function.
 * @property {(event: FocusEvent<any>) => void} onBlurHandler - The blur event handler function.
 * @property {string} [extraClass] - Additional CSS class names for the form field. Optional.
 */

export default interface FormProps {
  label: string;
  placeholder?: string;
  touched: any;
  value: any;
  errors: any;
  name: string;
  onChangeHandler: (event: ChangeEvent<any>) => void;
  onBlurHandler: (event: FocusEvent<any>) => void;
  extraClass?: string;
}
