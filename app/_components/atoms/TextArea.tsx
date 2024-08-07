import FormProps from "@/app/types/FormProps";

/**
 * Props interface extending FormProps.
 * @param {string} label - The main label text.
 * @param {string} altLabel - The alternative label text.
 */

interface Props extends FormProps {
  altLabel?: string;
}

/**
 * TextArea component for rendering a textarea input with optional labels and error handling.
 * @param {Props} props - The props for the TextArea component.
 * @returns JSX.Element
 */
export default function TextArea({
  placeholder,
  touched,
  value,
  errors,
  name,
  onChangeHandler,
  onBlurHandler,
  extraClass,
  label,
  altLabel,
}: Props) {
  return (
    <label className="form-control w-full" htmlFor={name}>
      <div className="label">
        <span className="label-text">{label}</span>
        {label && <span className="label-text-alt">{altLabel}</span>}
      </div>
      <textarea
        onChange={onChangeHandler}
        value={value}
        onBlur={onBlurHandler}
        name={name}
        placeholder={placeholder}
        className={`textarea textarea-bordered textarea-xs sm:textarea-sm md:textarea-md ${extraClass}`}
      />
      {errors[name] && touched[name] && (
        <p className="text-error text-sm">{errors[name]}</p>
      )}
    </label>
  );
}
