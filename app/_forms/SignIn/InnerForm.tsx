import AtomButton from "@/app/_components/atoms/Button";
import AtomCard from "@/app/_components/atoms/Card";
import AtomInput from "@/app/_components/atoms/Input";
import { Molecule } from "@/app/_components/molecules";
import SignInFormValues from "@/app/types/SignInFormValues";
import { FormikProps } from "formik";
import Image from "next/image";
import Link from "next/link";
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
      <AtomInput
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
    <AtomCard extraClass="bg-base-100 flex flex-row justify-center items-center overflow-hidden">
      <Molecule.Alert
        isOpen={isOpen}
        type={"error"}
        message={props.status}
        onClose={handleClose}
      ></Molecule.Alert>
      <div>
        <section className="flex flex-col gap-4 p-6 md:p-12">
          <h1 className="mx-auto text-xl font-bold text-center w-full">
            Sign-in to start trading!
          </h1>

          <form
            className="flex flex-col justify-center items-center gap-4 mt-6"
            onSubmit={props.handleSubmit}
          >
            {renderInputFields}

            <AtomButton buttonType={"btn-primary"}>Submit</AtomButton>
          </form>
        </section>
        <div className="bg-base-200 py-4 flex flex-row justify-center items-center gap-2 text-sm">
          <p>Don&apos;t have an Account?</p>
          <Link className="link  link-primary" href={"/sign-up"}>
            Sign Up.
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <Image src={"/robert.jpg"} width={260} height={500} alt="alt"></Image>
      </div>
    </AtomCard>
  );
};
