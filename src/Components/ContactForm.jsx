import React from "react";
import { Formik, Form, Field } from "formik";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import * as Yup from "yup";
import axios from "axios";


export default function ContactForm() {
  const handleContact = async(values) =>{
    try{
      const {data} = await axios.post("https://bookstore.eraasoft.pro/api/contacts/store", values)
      console.log("Success:", data);
    }
    catch(err){
       console.log("Error:", err.response?.data || err.message);
       alert("Please complete the form correctly!");
    }
  }
  const handleSubmit= (values) => {
    handleContact(values);
  }
  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().required("email is required")
  })
  return (
    <div className="w-full h-[790px] bg-[#3B2F4A]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="w-[592px] h-screen flex flex-col justify-center items-center gap-9">
            <h2 className="font-sans font-bold text-[40px] text-white">
              Have a Questions?
              <br /> Get in Touch
            </h2>
            <p className="font-sans font-normal text-[#ffffff]/20 text-[18px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
            <Formik
              initialValues={{ name: "", email: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleContact(values)}
            >
              <Form className="flex flex-col gap-5 items-center w-full">
                <div className="flex gap-5">
                  <Field
                    type="text"
                    name="name"
                    className="w-[284px] h-[56px] p-4 rounded-lg border text-[#ffffff]/20"
                    placeholder="Name"
                  />
                  <Field
                    type="email"
                    name="email"
                    className="w-[284px] h-[56px] p-4 rounded-lg border text-[#ffffff]/20"
                    placeholder="Email address"
                  />
                </div>
                <Field
                  type="text"
                  name="message"
                  className="w-[592px] h-[152px] p-4 rounded-lg border text-[#ffffff]/20"
                  placeholder="Your message"
                />
                <button
                  type="submit"
                  className="w-[200px] h-[48px] bg-[#D9176C] rounded-lg font-semibold font-sans text-white text-xl"
                >
                  Send Message
                </button>
              </Form>
            </Formik>
          </div>

          <div className="w-[312px] h-full flex flex-col justify-center gap-4 ml-auto">
            <div className="flex items-center gap-5">
              <FaPhone className="w-12 h-12 bg-white text-[#D9176C] rounded-lg p-2" />
              <p className="text-[16px] font-sans text-white/20">01123456789</p>
            </div>
            <div className="flex items-center gap-5">
              <MdOutlineMessage className="w-12 h-12 bg-white text-[#D9176C] rounded-lg p-2" />
              <p className="text-[16px] font-sans text-white/20">
                Example@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-5">
              <CiLocationOn className="w-12 h-12 bg-white text-[#D9176C] rounded-lg p-2" />
              <p className="text-[16px] font-sans w-[248px] text-white/20">
                adipiscing elit. Mauris et ultricies est. Aliquam in justo
                varius,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
