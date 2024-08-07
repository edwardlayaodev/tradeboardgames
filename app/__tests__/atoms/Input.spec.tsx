import { Atom } from "@/app/_components/atoms";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Input", () => {
  it("renders the Input with the correct value", () => {
    render(
      <Atom.Input
        label={"test-label"}
        placeholder="enter email"
        onChangeHandler={() => {}}
        onBlurHandler={() => {}}
        touched={true}
        errors={[]}
        value={"email@test.com"}
        name={"test"}
        type={"email"}
      />
    );

    const label = screen.queryByText("test-label");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("enter email");
    expect(input).toHaveValue("email@test.com");
  });
});
