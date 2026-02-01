import React from "react";
import HeroSection from "../Components/HeroSection";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try {
      const { data } = await axios.post(
        "https://bookstore.eraasoft.pro/api/login",
        values,
      );
      navigate("/Home");
      console.log("Success:", data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const handleSubmit = (values) => {
    handleLogin(values);
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string()
      .min(6, "password should be at least 6 characters")
      .required("password is required"),
  });
  
  return (
    <div>
      
      <HeroSection />

      <div className="w-full h-[448px] bg-[#F5F5F5] p-5 flex flex-col justify-center items-center gap-6">
        <h2 className="text-2xl text-black font-bold">Welcome Back!</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className="w-[576px] h-[448px] flex flex-col justify-center items-center gap-6 mx-auto">
            <label
              htmlFor="email"
              className="font-sans font-semibold text-lg text-black"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="h-9 w-full text-black border-2 rounded-lg p-5"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
            <label
              htmlFor="password"
              className="font-sans font-semibold text-lg text-black"
            >
              Password
            </label>
            <Field
              name="password"
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="h-9 w-full text-black border-2 rounded-lg p-5"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
            <button
              type="submit"
              className="w-full h-[48px] text-white bg-[#D9176C] rounded-lg p-5 text-center"
            >
              Log in
            </button>
          </Form>
        </Formik>
        <p>
          Don’t have an account?
          <span className="text-[#D9176C] cursor-pointer" onClick={() => navigate("/signup")}>
           
              signup
            
          </span>
        </p>
      </div>

      <div className="w-full h-[160px] bg-[#F5F5F5] flex flex-col justify-center items-center gap-3 ">
        <p className="font-sans font-normal text-[14px] text-black">or</p>
        <button className="w-xl h-[46px] flex justify-center gap-3 rounded-lg bg-white font-sans font-normal text-sm p-4 border shadow">
          <FcGoogle className="text-xl" />
          Login with Google
        </button>
        <button className="w-[576px] h-[46px] flex justify-center gap-3 rounded-lg bg-white font-sans font-normal text-sm p-4 border shadow">
          <FaFacebook className="text-xl" />
          Login with Facebook
        </button>
      </div>
     
    </div>
  );
}
