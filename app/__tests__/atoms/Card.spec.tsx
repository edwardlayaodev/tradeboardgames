import { Atom } from "@/app/_components/atoms";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Card", () => {
  beforeEach(() => {
    render(<Atom.Card extraClass="extra">test</Atom.Card>);
  });

  it("renders the card", () => {
    const card = screen.queryByText("test");
    expect(card).toBeInTheDocument();
  });

  it("applies the extraClass", () => {
    const extraClass = screen.queryByText("test");
    expect(extraClass).toHaveClass("extra");
  });
});
