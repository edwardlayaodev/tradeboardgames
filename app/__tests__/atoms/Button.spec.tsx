import { Atom } from "@/app/_components/atoms";
import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

const handleClick = jest.fn();

type ButtonType = "btn-primary" | "btn-secondary" | "btn-neutral" | "btn-ghost";

const buttonTypes = [
  "btn-primary",
  "btn-secondary",
  "btn-neutral",
  "btn-ghost",
];

const buttonRender = buttonTypes.map((type, index) => {
  return (
    <Atom.Button
      key={type + index}
      onClick={handleClick}
      buttonType={type as ButtonType}
    >
      {type}
    </Atom.Button>
  );
});

describe("Button", () => {
  beforeEach(() => {
    render(
      <Atom.Button onClick={handleClick} buttonType="btn-primary">
        test
      </Atom.Button>
    );
  });

  it("renders the button with children", () => {
    const button = screen.queryByText("test");
    expect(button).toBeInTheDocument();
  });
  it("calls onClick when clicked", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
  it("renders the button type correctly", () => {
    render(buttonRender);

    buttonTypes.forEach((type) => {
      const buttonElement = screen.getByText(type);
      expect(buttonElement).toHaveClass(type);
    });
  });
});
