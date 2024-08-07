import { Atom } from "../atoms";
import React, { cloneElement } from "react";

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

export default function Modal({ buttonProps, children, id }: Props) {
  function handleOpen() {
    const dialog = document.getElementById(id) as HTMLDialogElement;
    if (dialog) dialog.showModal();
  }

  return (
    <>
      <Atom.Button onClick={handleOpen} buttonType={buttonProps.type}>
        {buttonProps.label}
      </Atom.Button>
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
