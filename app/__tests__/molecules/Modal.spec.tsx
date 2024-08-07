import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Molecule } from "@/app/_components/molecules";

const actionHandler = jest.fn();
const showModal = (HTMLDialogElement.prototype.showModal = jest.fn());
const alertType = ["info", "success", "warning", "error"];

describe("Modal", () => {
  beforeEach(() => {
    render(
      <Molecule.Modal
        id="modal"
        buttonProps={{ type: "btn-primary", label: "buttonModal" }}
        actionHandler={actionHandler}
      >
        Hello
      </Molecule.Modal>
    );
  });
  it("renders the button that will open the modal", () => {
    const btn = screen.getByText("buttonModal");
    expect(btn).toBeInTheDocument();
  });
  it("should not show modal content initially", () => {
    const text = screen.getByText("Hello");
    expect(text).not.toBeVisible();
  });
  it("should open the modal when clicked", async () => {
    const btn = screen.getByText("buttonModal");
    fireEvent.click(btn);
    expect(showModal).toHaveBeenCalled();
  });
});
