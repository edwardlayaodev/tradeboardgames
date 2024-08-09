import { FormikProps } from "formik";
import SignUpFormValues from "@/app/types/SignUpFormValues";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AtomCard from "@/app/_components/atoms/Card";
import AtomInput from "@/app/_components/atoms/Input";
import AtomButton from "@/app/_components/atoms/Button";
import MoleculeAlert from "@/app/_components/molecules/Alert";
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
      <AtomInput
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
    <AtomCard extraClass="bg-base-100 flex flex-row justify-center items-center overflow-hidden">
      <MoleculeAlert
        isOpen={isOpen}
        type={"error"}
        message={props.status}
        onClose={handleClose}
      ></MoleculeAlert>
      <div>
        <section className="flex flex-col gap-4 p-6 md:p-12">
          <h1 className="mx-auto text-xl font-bold text-center w-full">
            Join our growing Community.
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
          <p>Already have an Account?</p>
          <Link className="link  link-primary" href={"/sign-up"}>
            Sign In.
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <Image src={"/clint.jpg"} width={365} height={500} alt="alt" />
      </div>
    </AtomCard>
  );
};
