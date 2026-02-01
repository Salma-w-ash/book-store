import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import React from 'react'

export default function ForgotPassword() {
    const validationSchema = Yup.object({
        email: Yup.string().required("email is required"),})
  return (
    <div className="w-full h-[1260px] bg-[#F5F5F5]">
      <div className="flex flex-col justify-center items-center gap-3">
        <h3 className="font-sans font-semibold text-[#D9176C] text-[16px]">
          Forget Password?
        </h3>
        <p className="font-sans font-normal text-sm text-[#222222]/50">
          Enter your email to reset your password
        </p>
        
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
          >
            <Form className='flex flex-col justify-center gap-3'>
              <label htmlFor="email" className='font-sans font-semibold text-lg'>Email</label>
              <Field
                name="email"
                type="email"
                id="email"
                className="w-[576px] h-[54px] bg-white rounded-lg p-4"
                placeholder="example@gmail.com"
              />
              <button
                type="submit"
                className="w-[576px] h-[48px] bg-[#D9176C] font-sans font-semibold text-white text-xl rounded-lg capitalize"
              >
                Send reset code
              </button>
            </Form>
          </Formik>
     
      </div>
    </div>
  );
}
