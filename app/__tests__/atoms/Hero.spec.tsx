import AtomHero from "@/app/_components/atoms/Hero";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Hero", () => {
  beforeEach(() => {
    render(<AtomHero>test</AtomHero>);
  });

  it("renders the Hero Section", () => {
    const heroText = screen.queryByText("test");
    expect(heroText).toBeInTheDocument();
  });
});
