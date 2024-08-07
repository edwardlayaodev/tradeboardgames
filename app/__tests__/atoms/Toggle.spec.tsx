import { Atom } from "@/app/_components/atoms";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const toggleTypes = ["toggle", "checkbox", "radio"];

const toggleRender = toggleTypes.map((type, index) => {
  return (
    <Atom.Toggle
      key={type + index}
      type={type as "toggle" | "checkbox" | "radio"}
      label={`${type}_label`}
      onChangeHandler={() => {}}
      onBlurHandler={() => {}}
      touched={true}
      errors={[]}
      value={true}
      name={type}
    />
  );
});
describe("Toggle", () => {
  it("renders the correct input for the type", () => {
    const { container } = render(toggleRender);
    toggleTypes.forEach((type) => {
      const input = container.querySelector(`input[name="${type}"]`);
      expect(input).toHaveClass(type);
    });
  });
  it("renders the label", () => {
    render(toggleRender);
    toggleTypes.forEach((type) => {
      screen.getByText(`${type}_label`);
    });
  });
});
