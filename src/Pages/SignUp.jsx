import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function SignUp() {
     const handleSubmit= (values) => {
          handleLogin(values);
        };
        const validationSchema = Yup.object({
          identifier: Yup.string().required("email is required"),
          password: Yup.string()
            .min(6, "password should be at least 6 characters")
            .required("password is required"),
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
        });
        const navigate = useNavigate();
  
  const registerUser = async (userData) => {
    const navigate = useNavigate();

    try {
      const { data } = await axios.POST(
        "https://bookstore.eraasoft.pro/api/register",
        userData,
      );

      if (data) {
        alert("Registration successful!");
        navigate("/login");
        return data;
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
        <Header/>
      <Formik
        initialValues={{
          identifier: "",
          password: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className="w-[576px] h-[607px] p-5 flex flex-col justify-center items-center gap-2">
          <div className="name flex justify-between gap-2">
            <label
              htmlFor="firstName"
              className="font-sans font-semibold text-lg text-black"
            >
              First Name
            </label>
            <Field
              name="firstName"
              type="text"
              id="first"
              placeholder="user-name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
            <label
              htmlFor="lastName"
              className="font-sans font-semibold text-lg text-black"
            >
              Last Name
            </label>
            <Field
              name="lastName"
              type="text"
              id="last"
              placeholder="user-Lastname"
            />
            <ErrorMessage
              name="lasttName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
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
          <ErrorMessage
            name="email"
           
            className="text-red-500 text-sm mt-1"
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
          <ErrorMessage
            name="password"
            className="text-red-500 text-sm mt-1"
          />
          <button type='submit' className="w-full h-[48px] text-white bg-[#D9176C]">
            Sign Up
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
