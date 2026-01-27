import React from 'react' 
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


export default function LoginPage() {
    const handleSubmit= (values) => {
      handleLogin(values);
    };
    const validationSchema = Yup.object({
      identifier: Yup.string().required(
    "email is required",
      ),
      password: Yup.string()
        .min(6, "password should be at least 6 characters")
        .required("password is required"),
    });
    const handleLogin = async (values) => {
      try {
        const { data } = await axios.POST(
          "https://bookstore.eraasoft.pro/api/login",
          values,
        );
        console.log(res, data);
      } catch (error) {
        console.error(err);
      }
    };
  return (
    <div className=" ">
      <Header />
      <h2 className="text-2xl text-black font-bold">Welcome Back!</h2>
      <Formik
        initialValues={{ identifier: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className="w-[576 px] h-[448 px] p-5 flex flex-col justify-center items-center gap-2">
          <label
            htmlFor="email"
            className="font-sans font-semibold text-lg text-black"
          >
            Email
          </label>
          <Field
            name="identifier"
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="h-81 "
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
          />
          <button className="w-full h-[48px] text-white bg-[#D9176C]">
            Log in
          </button>
        </Form>
      </Formik>
      <div className="w-[576px] h-[148px] flex flex-col justify-center items-center gap-3">
        <p className="font-sans font-normal text-[14px] text-black">or</p>
        <button className="h-[46px] rounded-lg bg-white font-sans font-normal text-sm">
          Login with Google{" "}
        </button>
        <button className="h-[46px] rounded-lg bg-white font-sans font-normal text-sm">
          Login with Facebook
        </button>
      </div>
      <Footer />
    </div>
  );
}
