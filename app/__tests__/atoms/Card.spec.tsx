import AtomCard from "@/app/_components/atoms/Card";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Card", () => {
  beforeEach(() => {
    render(<AtomCard extraClass="extra">test</AtomCard>);
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
