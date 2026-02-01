import { Field, Form, Formik } from 'formik';
import React from 'react'

export default function NewPassword() {
  return (
    <div className="w-full h-[1260px] bg-[#F5F5F5]">
      <div className="container mx-auto flex flex-col justify-center items-center gap-9">
        <div className="w-[576px] h-[476px] ">
          <p className="text-[#D9176C] font-sans font-semibold text-[16px]">
            Create new password!
          </p>
          <p className="text-[#222222]/50 font-sans font-normal text-[14px]">
            Create a strong password Your new password must be different from
            previous one
          </p>
          <Formik>
            <Form>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className="w-[576px] h-[54px] rounded-lg bg-white p-4 text-[#222222]/50"
                placeholder="Enter Password"
              />
              <label htmlFor="password">Confirm password</label>
              <Field
                type="password"
                name="Confirm password"
                className="w-[576px] h-[54px] rounded-lg bg-white p-4 text-[#222222]/50"
                placeholder="Confirm password"
              />
              <Field type="checkbox" name="rememberMe" />
              <label className="font-sans text-[14px]"> Remember me</label>
              <button
                type="submit"
                className="w-[576px] h-[48px] bg-[#D9176C] font-sans font-semibold text-white text-xl rounded-lg capitalize"
              >
                Reset password
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
