import { Atom } from "@/app/_components/atoms";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Animated", () => {
  it("renders correctly when isVisible is true", () => {
    const component = render(
      <Atom.Animated animationType={"opacity"} extraClass="" isVisible={true}>
        test
      </Atom.Animated>
    );
    const text = component.queryByText("test");
    expect(text).toBeInTheDocument();
  });
  it("does not render when isVisible is false", () => {
    const component = render(
      <Atom.Animated animationType={"opacity"} extraClass="" isVisible={false}>
        test
      </Atom.Animated>
    );
    const text = component.queryByText("test");
    expect(text).not.toBeInTheDocument();
  });
  it("adds the correct animation for each animationType", () => {
    const component1 = render(
      <Atom.Animated animationType={"opacity"} extraClass="" isVisible={true}>
        opacity
      </Atom.Animated>
    );

    const component2 = render(
      <Atom.Animated
        animationType={"slideFromTop"}
        extraClass=""
        isVisible={true}
      >
        slide
      </Atom.Animated>
    );
    const text = component1.getByText("opacity");
    const text2 = component2.getByText("slide");

    const style = window.getComputedStyle(text);
    const style2 = window.getComputedStyle(text2);

    expect(style.willChange).toBe("opacity");
    expect(style2.willChange).toBe("transform");
  });

  it("adds the proper extraClass to the component", () => {
    const component = render(
      <Atom.Animated
        animationType={"opacity"}
        extraClass="test"
        isVisible={true}
      >
        test
      </Atom.Animated>
    );
    const text = component.queryByText("test");
    expect(text).toHaveClass("test");
  });
});
