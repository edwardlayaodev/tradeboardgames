import { Atom } from "@/app/_components/atoms";
import { Molecule } from "@/app/_components/molecules";
import SignInFormValues from "@/app/types/SignInFormValues";
import { FormikProps } from "formik";
import { useEffect, useState } from "react";

/**
 * InnerForm component for rendering the form UI.
 * @param {FormikProps<FormValues>} props - The props from Formik for handling form state and actions.
 * @returns JSX.Element
 */
export const InnerForm = (props: FormikProps<SignInFormValues>) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputFields = [
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "password", label: "Password" },
  ];

  const renderInputFields = inputFields.map((item, index) => {
    return (
      <Atom.Input
        key={item.name + index}
        label={item.label}
        onChangeHandler={props.handleChange}
        onBlurHandler={props.handleBlur}
        touched={props.touched}
        errors={props.errors}
        value={props.values[item.name as "email" | "password"]}
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
        <h1 className="mx-auto text-2xl font-bold">Sign-in</h1>
        <form
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={props.handleSubmit}
        >
          {renderInputFields}

          <Atom.Button buttonType={"btn-primary"}>Submit</Atom.Button>
        </form>
      </section>
    </>
  );
};
