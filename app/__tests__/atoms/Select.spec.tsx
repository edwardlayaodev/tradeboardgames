import AtomSelect from "@/app/_components/atoms/Select";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const options = ["foo", "bar"];

describe("Select", () => {
  beforeEach(() => {
    render(
      <AtomSelect
        optionList={options}
        altLabel="foobar"
        label={"select"}
        onChangeHandler={() => {}}
        onBlurHandler={() => {}}
        touched={true}
        errors={[]}
        value={50}
        name={"selectInput"}
      />
    );
  });
  it("renders the options properly", () => {
    options.forEach((option) => {
      const text = screen.getByText(option);
      expect(text).toBeInTheDocument();
    });
  });

  it("renders the label properly", () => {
    const label = screen.getByText("select");
    expect(label).toBeInTheDocument();
  });
});
