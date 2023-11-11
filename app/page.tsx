"use client";
import { useEffect, useState } from "react";
import MainScreen from "./components/home-page/mainScreen";
import client from "./GraphQLClient";
import { FindOneEmailQuery } from "./queries/FindOneEmail.query";
import SignUp from "./components/home-page/signUp";
import { SignUpQuery } from "./queries/SignUp.query";
import Cookies from "js-cookie";
import DashBoard from "./components/dashBoard/dashBoard";

enum ScreenSlide {
  HOME,
  SIGNIN,
  SIGNUP,
  DASHBOARD,
}
export interface SignUpUser {
  firstName: string;
  lastName: string;
  primaryEmail: string;
  password: string;
  confirmpassword: string;
}
const SignUpUserInitial: SignUpUser = {
  firstName: "",
  lastName: "",
  primaryEmail: "",
  password: "",
  confirmpassword: "",
};
export default function Home() {
  const [isMainScreen, setIsMainScreen] = useState(true);
  const [email, setEmail] = useState<string>();
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [currentSlide, setCurrentSlide] = useState<ScreenSlide>(
    ScreenSlide.HOME
  );
  const [signUpUser, SetSignUpUser] = useState<SignUpUser>(SignUpUserInitial);

  const [jwtTocken, setJwtTocken] = useState<string | undefined>(
    Cookies.get("jwtToken")
  );
  useEffect(() => {
    // Cookies.remove("jwtToken");
    if (jwtTocken) {
      setCurrentSlide(ScreenSlide.DASHBOARD);
    } else {
      setCurrentSlide(ScreenSlide.HOME);
    }
  }, [jwtTocken]);

  const getUserDetailByGraphQLRequestAPICall = async () => {
    try {
      if (!email) return;
      setIsLoading(true);
      const variables = {
        payload: {
          primaryEmail: email,
        },
      };
      const response: any = await client.request(FindOneEmailQuery, variables);
      const alreadyUserExist = response?.findOneEmail;
      if (alreadyUserExist) {
        setCurrentSlide(ScreenSlide.SIGNIN);
      } else {
        setCurrentSlide(ScreenSlide.SIGNUP);
      }
      console.log(alreadyUserExist);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const userSignUp = async (data: SignUpUser) => {
    try {
      SetSignUpUser(data);
      console.log(signUpUser, "----signUpUser");
      setIsLoading(true);
      const variables = {
        payload: {
          ...data,
          confirmpassword: undefined,
        },
      };
      const response: any = await client.request(SignUpQuery, variables);
      if (response.signUp) {
        Cookies.set("jwtToken", response.signUp, { expires: 30 });
        console.log("Sucess");
        setCurrentSlide(ScreenSlide.DASHBOARD);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="">
      {currentSlide == ScreenSlide.HOME ? (
        <MainScreen
          email={email}
          setIsMainScreen={() => {}}
          onNextPress={() => {
            console.log("onNextPress");
            getUserDetailByGraphQLRequestAPICall();
          }}
          onEmailChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
      ) : currentSlide == ScreenSlide.SIGNIN ? (
        <>ScreenSlide.SIGNIN</>
      ) : currentSlide == ScreenSlide.SIGNUP ? (
        <SignUp
          email={email}
          onDataUpdate={(data: SignUpUser) => {
            userSignUp(data);
          }}
        />
      ) : currentSlide == ScreenSlide.DASHBOARD ? (
        <DashBoard />
      ) : (
        <>Not Difined</>
      )}
    </main>
  );
}
