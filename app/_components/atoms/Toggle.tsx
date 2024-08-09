import FormProps from "@/app/types/FormProps";

/**
 * Props interface for the Toggle component.
 * @param {"toggle" | "checkbox" | "radio"} type - The type of input element. Required.
 * @param {boolean} [checked] - Indicates whether the input is checked by default. Optional.
 */
interface Props extends FormProps {
  type: "toggle" | "checkbox" | "radio";
  checked?: boolean;
}

/**
 * Interface for toggle element properties.
 * @param {string} type - The type of input element.
 * @param {string} className - The CSS class name for styling the input element.
 */
interface ToggleElement {
  type: string;
  className: string;
}

/** Type definition for a record of input types and their properties. */
type InputTypeRecord = Record<string, ToggleElement>;

/** Object containing properties for different toggle input types. */
const ToggleProps: InputTypeRecord = {
  checkbox: {
    type: "checkbox",
    className: "checkbox checkbox-xs sm:checkbox-sm md:checkbox-md",
  },
  toggle: {
    type: "checkbox",
    className: "toggle toggle-xs sm:toggle-sm md:toggle-md",
  },
  radio: { type: "radio", className: "radio radio-xs sm:radio-sm md:radio-md" },
};

/**
 * Toggle component to render different types of toggle inputs with optional labels.
 * @param {Props} props - The props for the Toggle component.
 * @returns {JSX.Element} The rendered toggle input component.
 */
export default function AtomToggle({
  checked = false,
  label,
  name,
  onChangeHandler,
  value,
  errors,
  touched,
  type,
}: Props) {
  return (
    <>
      <label className="label cursor-pointer gap-2" htmlFor={name}>
        <span className="label-text text-xs md:text-sm">{label}</span>
        <input
          onChange={onChangeHandler}
          value={value}
          name={name}
          type={ToggleProps[type].type}
          className={ToggleProps[type].className}
          defaultChecked={checked}
        />
      </label>
      {errors[name] && touched[name] && (
        <p className="text-error text-sm w-full ">{errors[name]}</p>
      )}
    </>
  );
}
