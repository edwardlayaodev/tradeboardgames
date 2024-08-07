import { Atom } from "@/app/_components/atoms";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Hero", () => {
  beforeEach(() => {
    render(<Atom.Hero>test</Atom.Hero>);
  });

  it("renders the Hero Section", () => {
    const heroText = screen.queryByText("test");
    expect(heroText).toBeInTheDocument();
  });
});
