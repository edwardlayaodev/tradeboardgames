import AtomRating from "@/app/_components/atoms/Rating";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Rating", () => {
  beforeEach(() => {
    render(
      <AtomRating
        maxRating={5}
        label={"rating"}
        onChangeHandler={() => {}}
        onBlurHandler={() => {}}
        touched={true}
        errors={[]}
        value={50}
        name={"test"}
      />
    );
  });
  it("renders the Rating with the correct stars", () => {
    const radios = screen.getAllByRole("radio");
    expect(radios.length).toBe(5);
  });
});
