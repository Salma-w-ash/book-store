import { Formik, Form, Field } from "formik";
import { FaCamera } from "react-icons/fa";
import profile from "../assets/7098886df02b2521176bde95e31347ff1428d87f (1).jpg";
import HeroSection from "../Components/HeroSection";
export default function Profile() {
  return (
    <div>
        <HeroSection height={338}/>
      <div className="w-full min-h-screen bg-[#f5f5f5] flex justify-center py-16">
        <div className="w-full max-w-xl text-left space-y-8">
          <div className="relative w-45 h-45 mx-auto top-0">
            <img
              src={profile}
              alt="profile"
              className="w-45 h-45 rounded-full object-cover"
            />
            <div className="absolute bottom-1 right-1 w-7 h-7 bg-[#D9176C] rounded-full flex items-center justify-center cursor-pointer">
              <FaCamera className="text-white text-xs" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-lg font-sans font-semibold text-[#222222] mb-6">
              General information
            </h2>

            <Formik initialValues={{}}>
              <Form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#222222]/50 mb-1">
                      First Name
                    </label>
                    <Field
                      name="firstName"
                      placeholder="John"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 placeholder:text-[#222222]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#222222]/50 mb-1">
                      Last Name
                    </label>
                    <Field
                      name="lastName"
                      placeholder="Smith"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 placeholder:text-[#222222]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#222222]/50 mb-1">
                    Email
                  </label>
                  <Field
                    name="email"
                    placeholder="johnsmith@gmail.com"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 placeholder:text-[#222222]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#222222]/50 mb-1">
                    Phone number
                  </label>
                  <Field
                    name="phone"
                    placeholder="123456789"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 placeholder:text-[#222222]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#222222]/50 mb-1">
                    Address
                  </label>
                  <Field
                    name="address"
                    placeholder="Maadi, Cairo, Egypt."
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#D9176C] placeholder:text-[#222222]"
                  />
                </div>

                <button
                  type="button"
                  className="mt-6 w-full bg-[#D9176C]/50 hover:bg-[#D9176C] text-white text-sm font-medium py-2 rounded-lg "
                >
                  Update information
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
