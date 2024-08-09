import React from "react";
import AtomButton from "../atoms/Button";

interface Props {
  id: string;
  buttonProps: buttonProps;

  children: React.ReactNode;
  actionHandler: any;
}

interface buttonProps {
  type: "btn-primary" | "btn-secondary" | "btn-neutral" | "btn-ghost";
  label: string;
}

export default function MoleculeModal({ buttonProps, children, id }: Props) {
  function handleOpen() {
    const dialog = document.getElementById(id) as HTMLDialogElement;
    if (dialog) dialog.showModal();
  }

  return (
    <>
      <AtomButton onClick={handleOpen} buttonType={buttonProps.type}>
        {buttonProps.label}
      </AtomButton>
      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {children}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
