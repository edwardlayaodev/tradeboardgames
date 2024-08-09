import AtomVisibility from "@/app/_components/atoms/Visibility";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Visibility", () => {
  it("renders the children if state is true", () => {
    render(<AtomVisibility state={true}>test</AtomVisibility>);
    const text = screen.queryByText("test");
    expect(text).toBeInTheDocument();
  });
  it("does not render the children if state is false", () => {
    render(<AtomVisibility state={false}>test</AtomVisibility>);
    const text = screen.queryByText("test");
    expect(text).not.toBeInTheDocument();
  });
});
