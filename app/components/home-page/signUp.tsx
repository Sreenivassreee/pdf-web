import { useEffect, useState } from "react";
import CustomInput from "../CustomInput";
import { SignUpUser } from "@/app/page";
const SignUpUserInitial: SignUpUser = {
  firstName: "",
  lastName: "",
  primaryEmail: "",
  password: "",
  confirmpassword: "",
};
const SignUp = ({ onDataUpdate, email }: any) => {
  const [signUpUser, setSignUpUser] = useState<SignUpUser>(SignUpUserInitial);
  const onDataChange = (e: any) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;
    setSignUpUser((pre) => ({ ...pre, [name]: value, primaryEmail: email }));
  };

  return (
    <div className="  flex flex-col items-center align-middle">
      {" "}
      <CustomInput
        name={"firstName"}
        label={"firstName"}
        value={signUpUser.firstName}
        onChange={onDataChange}
      />
      <CustomInput
        name={"lastName"}
        label={"lastName"}
        value={signUpUser.lastName}
        onChange={onDataChange}
      />
      <CustomInput
        name={"primaryEmail"}
        label={"primaryEmail"}
        value={email}
        disable={true}
        onChange={onDataChange}
      />
      <CustomInput
        name={"password"}
        label={"password"}
        value={signUpUser.password}
        onChange={onDataChange}
      />
      <CustomInput
        name={"confirmpassword"}
        label={"confirmpassword"}
        value={signUpUser.confirmpassword}
        onChange={onDataChange}
      />
      <button
        className="m-2 rounded-md bg-black px-5 py-2 my-5 text-white "
        onClick={() => {
          onDataUpdate(signUpUser);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SignUp;
