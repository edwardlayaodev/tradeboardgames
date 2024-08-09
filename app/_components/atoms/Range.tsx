import FormProps from "@/app/types/FormProps";

/**
 * Props interface extending FormProps.
 * @param {number} min - The minimum value for the range input (default is 0).
 * @param {number} max - The maximum value for the range input (default is 100).
 */
interface Props extends FormProps {
  min?: number;
  max?: number;
}

/**
 * Range component for rendering an input of type "range" with optional min and max values.
 * @param {Props} props - The props for the Range component.
 * @returns JSX.Element
 */
export default function AtomRange({
  onChangeHandler,
  onBlurHandler,
  min = 0,
  max = 100,
  value,
  name,
  label,
}: Props) {
  return (
    <label className="label flex items-center gap-4 w-full ">
      <span className="label-text text-xs md:text-sm">{label}</span>
      <input
        name={name}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        type="range"
        min={min}
        max={max}
        value={value}
        className="range range-xs sm:range-sm md:range-md"
      />
      <span className="label-text text-sm right-[-10px]">{value}</span>
    </label>
  );
}
