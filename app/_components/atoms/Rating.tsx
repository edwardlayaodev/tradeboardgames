import FormProps from "@/app/types/FormProps";

/**
 * Props interface extending FormProps.
 * @param {number} maxRating - The maximum rating value.
 */
interface Props extends FormProps {
  maxRating: number;
}

/**
 * Rating component for rendering a series of radio inputs as a star rating system.
 * @param {Props} props - The props for the Rating component.
 * @returns JSX.Element
 */
export default function Rating({ onChangeHandler, name, maxRating }: Props) {
  // Array to hold the rating elements
  const elements = [];

  // Create the star rating inputs based on the maxRating value
  for (let i = 1; i <= maxRating; i++) {
    elements.push(
      <input
        key={name + i}
        type="radio"
        onChange={onChangeHandler}
        value={i}
        name={name}
        className="mask mask-star"
      />
    );
  }

  return (
    <label
      htmlFor={name}
      className="rating rating-xs sm:rating-sm md:rating-md"
    >
      {elements}
    </label>
  );
}
