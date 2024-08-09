import AtomBrand from "@/app/_components/atoms/Brand";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Brand", () => {
  it("renders the logo and has correct logo props, and renders the label", () => {
    const component = render(
      <AtomBrand
        logoProps={{ src: "next.svg", width: 50, height: 50, alt: "next" }}
        label="test"
      />
    );
    const img = component.queryByAltText("next");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("width", "50");
    expect(img).toHaveAttribute("height", "50");
    expect(img).toHaveAttribute("src", "next.svg");

    const text = component.queryByText("test");
    expect(text).toBeInTheDocument();
  });
});
