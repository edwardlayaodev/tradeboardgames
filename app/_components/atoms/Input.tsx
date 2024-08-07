import FormProps from "@/app/types/FormProps";
import {
  EnvelopeIcon,
  KeyIcon,
  DocumentTextIcon,
  DocumentIcon,
} from "@heroicons/react/16/solid";
import { Atom } from ".";

/**
 * Props interface for the Input component.
 * @param {"start" | "end"} [iconPosition] - The position of the icon relative to the input field. Optional.
 * @param {"input" | "file" | "password" | "email"} type - The type of the input field. Required.
 */
interface Props extends FormProps {
  iconPosition?: "start" | "end";
  type: "input" | "file" | "password" | "email";
}

/** Constant for the width of icons. */
const iconWidth = 18;

/**
 * Interface for input element properties.
 * @param {string} type - The type of input element.
 * @param {string} className - The CSS class name for styling the input element.
 * @param {React.ReactNode} [svg] - The optional SVG icon element.
 */
interface InputElement {
  type: string;
  className: string;
  svg?: React.ReactNode;
}

/** Type definition for a record of input types and their properties. */
type InputTypeRecord = Record<string, InputElement>;

/** CSS class for text inputs. */
const textInputClass =
  "input input-bordered input-xs sm:input-sm md:input-md flex items-center gap-2 w-full";

/** Object containing properties for different input types. */
const InputProps: InputTypeRecord = {
  input: {
    type: "input",
    className: textInputClass,
    svg: <DocumentTextIcon width={iconWidth} />,
  },
  password: {
    type: "password",
    className: textInputClass,
    svg: <KeyIcon width={iconWidth} />,
  },
  email: {
    type: "email",
    className: textInputClass,
    svg: <EnvelopeIcon width={iconWidth} />,
  },
  file: {
    type: "file",
    className:
      "file-input file-input-bordered file-input-xs sm:file-input-sm md:file-input-md flex p-2 items-center gap-4",
    svg: <DocumentIcon width={iconWidth} />,
  },
};

/**
 * Input component to render different types of input fields with optional icons.
 * @param {Props} props - The props for the Input component.
 * @returns {JSX.Element} The rendered input component.
 */
export default function Input({
  iconPosition = "start",
  label,
  placeholder,
  onChangeHandler,
  onBlurHandler,
  value,
  errors,
  touched,
  name,
  type,
  extraClass,
}: Props) {
  return (
    <>
      <label
        className={`${InputProps[type].className} ${extraClass} ${
          errors[name] && touched[name] && "border-error"
        }`}
        htmlFor={name}
      >
        {iconPosition == "start" && InputProps[type].svg}
        <p className="label-text text-xs md:text-sm">{label}</p>

        <input
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          name={name}
          value={value}
          type={InputProps[type].type}
          placeholder={placeholder}
          className="grow"
        />
        {iconPosition == "end" && InputProps[type].svg}
      </label>

      <Atom.Animated
        animationType="opacity"
        extraClass=""
        isVisible={errors[name] && touched[name]}
      >
        {errors[name] && touched[name] && (
          <p className="text-error text-sm w-full ">{errors[name]}</p>
        )}
      </Atom.Animated>
    </>
  );
}
