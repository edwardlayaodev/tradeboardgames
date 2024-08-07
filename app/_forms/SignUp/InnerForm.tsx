import { Atom } from "@/app/_components/atoms";
import { FormikProps } from "formik";
import SignUpFormValues from "@/app/types/SignUpFormValues";
import { Molecule } from "@/app/_components/molecules";
import { useEffect, useState } from "react";
/**
 * InnerForm component for rendering the sign-up form UI.
 * @param {FormikProps<FormValues>} props - The props from Formik for handling form state and actions.
 * @returns JSX.Element
 */
export const InnerForm = (props: FormikProps<SignUpFormValues>) => {
  const [isOpen, setIsOpen] = useState(false);
  // Fields for the Input Components
  const inputFields = [
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "password", label: "Password" },
    { type: "password", name: "confirmPassword", label: "Confirm Password" },
  ];

  // render based on inputFields
  const renderInputFields = inputFields.map((item, index) => {
    return (
      <Atom.Input
        key={item.name + index}
        label={item.label}
        onChangeHandler={props.handleChange}
        onBlurHandler={props.handleBlur}
        touched={props.touched}
        errors={props.errors}
        value={
          props.values[item.name as "email" | "password" | "confirmPassword"]
        }
        name={item.name}
        type={item.type as "email" | "password"}
      />
    );
  });

  useEffect(() => {
    setIsOpen(props.status ? true : false);
  }, [props.status]);

  function handleClose() {
    setIsOpen(false);
    props.setStatus(undefined);
  }

  return (
    <>
      <Molecule.Alert
        isOpen={isOpen}
        type={"error"}
        message={props.status}
        onClose={handleClose}
      ></Molecule.Alert>
      <section className="flex flex-col gap-4">
        <h1 className="mx-auto text-2xl font-bold">Sign-Up</h1>
        <form
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={props.handleSubmit}
        >
          {renderInputFields}
          <Atom.Button buttonType={"btn-primary"}>Submit</Atom.Button>
          <div>{props.status}</div>
        </form>
      </section>
    </>
  );
};
