import AtomButton from "@/app/_components/atoms/Button";
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
    <AtomButton
      key={type + index}
      onClick={handleClick}
      buttonType={type as ButtonType}
    >
      {type}
    </AtomButton>
  );
});

describe("Button", () => {
  beforeEach(() => {
    render(
      <AtomButton onClick={handleClick} buttonType="btn-primary">
        test
      </AtomButton>
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
