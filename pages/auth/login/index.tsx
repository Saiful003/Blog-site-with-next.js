import Input from "../../../components/Form/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHolder from "../../../components/Form/FormHolder";
import LogSignTemp from "../../../components/Form/LogSignTemp";
import { IRes } from "../../api/signIn";
import CustomInput from "../../../components/Form/Input";

interface Inputs {
  email: string;
  password: string | number;
}

interface IProps {
  data: IRes;
}

export default function Login({ data }: IProps) {
  const {
    handleSubmit,
    register,
    formState: {
      errors: { email, password },
    },
  } = useForm<Inputs>();

  // onSubmit function
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <LogSignTemp role={data.title}>
        <FormHolder>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <CustomInput
              label="Email"
              {...register("email", { required: "Please enter your email" })}
              type="email"
              placeholder="Enter your email"
              isError={email?.type === "required"}
              errorMessage={email?.message!}
            />
            <CustomInput
              label="Password"
              {...register("password", {
                required: "Please enter your password",
              })}
              type="password"
              placeholder="Enter your Password"
              isError={password?.type === "required"}
              errorMessage={password?.message!}
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
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/login");
  const data = await res.json();

  return {
    props: { data },
  };
}
