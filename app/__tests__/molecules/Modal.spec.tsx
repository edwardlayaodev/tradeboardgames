import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoleculeModal from "@/app/_components/molecules/Modal";

const actionHandler = jest.fn();
const showModal = (HTMLDialogElement.prototype.showModal = jest.fn());
const alertType = ["info", "success", "warning", "error"];

describe("Modal", () => {
  beforeEach(() => {
    render(
      <MoleculeModal
        id="modal"
        buttonProps={{ type: "btn-primary", label: "buttonModal" }}
        actionHandler={actionHandler}
      >
        Hello
      </MoleculeModal>
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
