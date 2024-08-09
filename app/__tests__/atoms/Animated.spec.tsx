import AtomAnimated from "@/app/_components/atoms/Animated";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Animated", () => {
  it("renders correctly when isVisible is true", () => {
    const component = render(
      <AtomAnimated animationType={"opacity"} extraClass="" isVisible={true}>
        test
      </AtomAnimated>
    );
    const text = component.queryByText("test");
    expect(text).toBeInTheDocument();
  });
  it("does not render when isVisible is false", () => {
    const component = render(
      <AtomAnimated animationType={"opacity"} extraClass="" isVisible={false}>
        test
      </AtomAnimated>
    );
    const text = component.queryByText("test");
    expect(text).not.toBeInTheDocument();
  });
  it("adds the correct animation for each animationType", () => {
    const component1 = render(
      <AtomAnimated animationType={"opacity"} extraClass="" isVisible={true}>
        opacity
      </AtomAnimated>
    );

    const component2 = render(
      <AtomAnimated
        animationType={"slideFromTop"}
        extraClass=""
        isVisible={true}
      >
        slide
      </AtomAnimated>
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
      <AtomAnimated
        animationType={"opacity"}
        extraClass="test"
        isVisible={true}
      >
        test
      </AtomAnimated>
    );
    const text = component.queryByText("test");
    expect(text).toHaveClass("test");
  });
});
