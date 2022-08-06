import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHolder from "../../../components/Form/FormHolder";
import CustomInput from "../../../components/Form/Input";
import LogSignTemp from "../../../components/Form/LogSignTemp";
import { IRes } from "../../../types";

interface Inputs {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
}

interface IProps {
  data: IRes[];
}

function SignIn({ data }: IProps) {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { firstname, lastname, email, age },
    },
  } = useForm<Inputs>();

  // onSubmit function
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <LogSignTemp role="Please Sign In">
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
          <CustomInput
            isError={age?.type === "required"}
            errorMessage={age?.message!}
            type="number"
            placeholder="Enter your age"
            label="Age"
            {...register("age", { required: "Please Enter your age" })}
          />
          <button
            className=" border w-full bg-emerald-400 hover:bg-emerald-500 text-white font-medium py-1"
            type="submit"
          >
            Submit
          </button>
        </form>
      </FormHolder>
      {data.map((product) => (
        <div>
          <h2> {product.servername} </h2>
          <p> {product.data} </p>
          <p> {product.message} </p>
        </div>
      ))}
    </LogSignTemp>
  );
}

export default SignIn;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
