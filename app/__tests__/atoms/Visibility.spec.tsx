import { Atom } from "@/app/_components/atoms";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Visibility", () => {
  it("renders the children if state is true", () => {
    render(<Atom.Visibility state={true}>test</Atom.Visibility>);
    const text = screen.queryByText("test");
    expect(text).toBeInTheDocument();
  });
  it("does not render the children if state is false", () => {
    render(<Atom.Visibility state={false}>test</Atom.Visibility>);
    const text = screen.queryByText("test");
    expect(text).not.toBeInTheDocument();
  });
});
