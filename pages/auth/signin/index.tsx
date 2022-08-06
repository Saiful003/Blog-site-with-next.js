import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHolder from "../../../components/Form/FormHolder";
import CustomInput from "../../../components/Form/Input";
import LogSignTemp from "../../../components/Form/LogSignTemp";
import { IRes } from "../../api/signin";

interface Inputs {
  firstname: string;
  lastname: string;
  email: string;
}

interface IProps {
  data: IRes;
}

function SignIn({ data }: IProps) {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { firstname, lastname, email },
    },
  } = useForm<Inputs>();

  // onSubmit function
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <LogSignTemp role={data.title}>
      <FormHolder>
        <form
          className=" flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            isError={firstname?.type === "required"}
            errorMessage={firstname?.message!}
            type="text"
            placeholder="Enter Your First Name"
            label="First Name"
            {...register("firstname", {
              required: "This first name field is required.",
            })}
          />
          <CustomInput
            label="Last Name"
            isError={lastname?.type === "required"}
            errorMessage={lastname?.message!}
            type="text"
            placeholder="Enter your last name"
            {...register("lastname", {
              required: "This last name field is required.",
            })}
          />
          <CustomInput
            label="Email"
            isError={email?.type === "required"}
            errorMessage={email?.message!}
            type="email"
            placeholder="Enter your Email"
            {...register("email", {
              required: "This email field is required.",
            })}
          />
          <button
            className=" border w-full bg-emerald-400 hover:bg-emerald-500 text-white font-medium py-1"
            type="submit"
          >
            Submit
          </button>
        </form>
      </FormHolder>
    </LogSignTemp>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/signin");
  const data = await res.json();

  return {
    props: { data },
  };
}

export default SignIn;
