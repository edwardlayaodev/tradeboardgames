import AtomTextArea from "@/app/_components/atoms/TextArea";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("TextArea", () => {
  beforeEach(() => {
    render(
      <AtomTextArea
        altLabel="altlabel"
        placeholder="textarea placeholder"
        label={"label"}
        onChangeHandler={() => {}}
        onBlurHandler={() => {}}
        touched={true}
        errors={[]}
        value={"hello world"}
        name={"textarea"}
      />
    );
  });

  it("renders the label and altlabel", () => {
    const label = screen.queryByText("label");
    const altLabel = screen.queryByText("altlabel");

    expect(label).toBeInTheDocument();
    expect(altLabel).toBeInTheDocument();
  });

  it("renders the value", () => {
    const input = screen.queryByPlaceholderText("textarea placeholder");
    expect(input).toHaveValue("hello world");
  });
});
