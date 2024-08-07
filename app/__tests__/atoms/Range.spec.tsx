import { Atom } from "@/app/_components/atoms";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Range", () => {
  it("renders the Range with label properly", () => {
    const { container } = render(
      <Atom.Range
        label={"range"}
        onChangeHandler={() => {}}
        onBlurHandler={() => {}}
        touched={true}
        errors={[]}
        value={50}
        name={"test"}
      />
    );

    const label = screen.queryByText("range");
    expect(label).toBeInTheDocument();

    const input = container.querySelector(`input[name="test"]`);
    expect(input).toHaveValue("50");
  });
});
