import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignUp() {
  const navigate = useNavigate();
  const handleRegister = async (values) => {
    

    try {
      const { data } = await axios.post(
        "https://bookstore.eraasoft.pro/api/register",
        values,
      );
console.log("Success:", data);
 navigate("/login");
      // if (data && data.success) {
      //   alert("Registration successful!");
      //   navigate("/login");
      //   return data;
      // } else {
      //   alert(data.message || "Registration failed");
      // }
    } catch (error) {
      console.error("Registration error:", error.response || error);
      alert("Something went wrong. Please try again.");
    }
  };
  const handleSubmit = (values) => {
    handleRegister(values);
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string()
      .min(6, "password should be at least 6 characters")
      .required("password is required"),
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  
 

  return (
    <div>
      <Header />
      <HeroSection />
      <div className="w-full h-7/12  bg-[#F5F5F5] p-5 flex flex-col justify-center items-center gap-6 py-4">
        <Formik
          initialValues={{
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            password_confirmation: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className="w-[576px] h-[448px] flex flex-col justify-center items-start gap-4 mx-auto">
            <div className="flex justify-between items-start gap-12">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="font-sans font-semibold text-lg text-black"
                >
                  First Name
                </label>
                <Field
                  name="first_name"
                  type="text"
                  id="first"
                  placeholder="Enter Your name"
                  className="h-9 w-full text-black border-2 rounded-lg p-5"
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="last_name"
                  className="font-sans font-semibold text-lg text-black"
                >
                  Last Name
                </label>
                <Field
                  name="last_name"
                  type="text"
                  id="last"
                  placeholder="Enter Your Last Name"
                  className="h-9 w-full text-black border-2 rounded-lg p-5"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <label
              htmlFor="email"
              className="font-sans font-semibold text-lg text-black "
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
              placeholder="Enter Your password"
              className="h-9 w-full text-black border-2 rounded-lg p-5"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
            <label
              htmlFor="password_confirmation"
              className="font-sans font-semibold text-lg text-black"
            >
              Confirm Password
            </label>
            <Field
              name="password_confirmation"
              type="password"
              id="password_confirmation"
              placeholder="Confirm Your password"
              className="h-9 w-full text-black border-2 rounded-lg p-5"
            />
            <ErrorMessage
              name="password_confirmation"
              component="div"
              className="text-red-500 text-sm"
            />
            <button
              type="submit"
              className="w-full h-[48px] text-white bg-[#D9176C] rounded-lg p-5 text-center"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
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
      <Footer />
    </div>
  );
}
