import { Atom } from "@/app/_components/atoms";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Molecule } from "@/app/_components/molecules";

const closeHandler = jest.fn();
const alertType = ["info", "success", "warning", "error"];

const alertRender = alertType.map((type, index) => {
  return (
    <Molecule.Alert
      key={type + index}
      type={type as "info" | "success" | "warning" | "error"}
      message={`${type}_message`}
      isOpen={true}
      onClose={closeHandler}
    />
  );
});
describe("Alert", () => {
  it("renders the correct alert by type", () => {
    const { container } = render(alertRender);
    alertType.forEach((item) => {
      const el = container.querySelector(`.alert-${item}`);
      expect(el).toBeInTheDocument();
    });
  });
  it("does not render the alert when isOpen is false", () => {
    render(
      <Molecule.Alert
        type="info"
        message={`message`}
        isOpen={false}
        onClose={closeHandler}
      />
    );

    const text = screen.queryByText("message");
    expect(text).not.toBeInTheDocument();
  });
  it("fire onClose function handler", async () => {
    const { container } = render(
      <Molecule.Alert
        type="info"
        message={`message`}
        isOpen={true}
        onClose={closeHandler}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(closeHandler).toHaveBeenCalled();
    });
  });
});
