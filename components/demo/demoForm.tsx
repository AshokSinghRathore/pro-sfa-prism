import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { VideoIntro } from "components/home";

export const DemoForm: React.FC = () => {
  return (
    <section className="py-28 px-4 w-full lg:max-w-7xl mx-auto">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-bold text-blue-600 uppercase mb-2">
          Demo Request Form
        </h3>
        <p className="text-lg text-gray-500 mx-auto w-full px-4 lg:w-11/12 lg:px-8">
          Kindly fill all the required fields and we will contact you soon.
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-2">
        <div className="lg:grid-cols-1 flex justify-center items-center m-2">
          <div className="container mx-auto mb-20 text-center">
            <VideoIntro />
            <h3 className="text-lg font-bold text-blue-600 uppercase mb-2">
              Experience Prism SFA in Action — Automate, Accelerate & Empower
              Your Sales Team
            </h3>
            <p className="text-lg text-gray-500 mx-auto w-full px-4 lg:w-11/12 lg:px-8">
              Discover how Prism SFA can revolutionize your sales process. From
              real-time Reports to intelligent sales management, our Sales Force
              Automation platform gives your team the tools they need to perform
              at their best. Schedule a personalized demo today and see how
              Prism SFA helps you close more deals, streamline operations, and
              gain valuable insights — all from a single powerful dashboard.
            </p>
          </div>
        </div>
        <div className="lg:grid-cols-1 flex justify-center items-center">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default DemoForm;

export const Form = ({ handleIsOpen }: { handleIsOpen?: () => void }) => {
  const [date, setDate] = useState<Date | undefined>();
  const [showCalander, setShowCalander] = useState<boolean>(false);

  useEffect(() => {
    setShowCalander(false);
  }, [date, setDate]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      numberOfEmployees: "",
      contact: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      numberOfEmployees: Yup.string().required("Number Of Employees is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log("Submitted values:", {...values, date});
      setShowCalander(false);
      if (handleIsOpen) handleIsOpen();
    },
  });

  const inputClass =
    "mt-2 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const errorClass = "text-xs text-red-600 mt-1";

  return (
    <>
      <div className="relative container mx-auto max-w-6xl">
        {/* Gradient shadow */}
        <div className="absolute -inset-1 rounded-b-md blur-xl opacity-50 bg-gradient-to-br from-blue-300 via-white to-blue-200"></div>

        {/* Form */}
        <form
          onSubmit={formik.handleSubmit}
          className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 bg-white p-4 rounded-b-md"
        >
          <div>
            <span className="text-sm font-medium text-gray-700 px-1">
              First Name <span className="text-red-600">*</span>
            </span>
            <input
              type="text"
              name="firstName"
              placeholder="Type first name here"
              className={inputClass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className={errorClass}>{formik.errors.firstName}</p>
            ) : (
              <p className="text-xs text-gray-500 mt-1">Required</p>
            )}
          </div>

          <div>
            <span className="text-sm font-medium text-gray-700 px-1">
              Last Name <span className="text-red-600">*</span>
            </span>
            <input
              type="text"
              name="lastName"
              placeholder="Type last name here"
              className={inputClass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className={errorClass}>{formik.errors.lastName}</p>
            ) : (
              <p className="text-xs text-gray-500 mt-1">Required</p>
            )}
          </div>

          {/* Date Picker Field */}
          <div className="flex flex-col relative">
            <span className="text-sm font-medium text-gray-700 px-1 mb-1">
              Pick a Date
            </span>
            <button
              type="button"
              className={inputClass}
              onClick={() => setShowCalander(!showCalander)}
            >
              {date ? date.toLocaleDateString() : "Pick a date"}
            </button>
            <div
              className={` ${
                showCalander ? "" : "hidden"
              } dropdown mt-1 absolute bg-white top-20 border border-gray-300 rounded-md px-3`}
            >
              <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                className="react-day-picker"
              />
            </div>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-700 px-1">
              Contact <span className="text-red-600">*</span>
            </span>
            <input
              type="number"
              name="contact"
              placeholder="Type contact here"
              className={inputClass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contact}
            />
            {formik.touched.contact && formik.errors.contact ? (
              <p className={errorClass}>{formik.errors.contact}</p>
            ) : (
              <p className="text-xs text-gray-500 mt-1">Required</p>
            )}
          </div>


          <div>
            <span className="text-sm font-medium text-gray-700 px-1">
              Number of Employees <span className="text-red-600">*</span>
            </span>
            <input
              type="number"
              name="numberOfEmployees"
              placeholder="Type No. of Employees here"
              className={inputClass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numberOfEmployees}
            />
            {formik.touched.numberOfEmployees && formik.errors.numberOfEmployees ? (
              <p className={errorClass}>{formik.errors.numberOfEmployees}</p>
            ) : (
              <p className="text-xs text-gray-500 mt-1">Required</p>
            )}
          </div>

          <div>
            <span className="text-sm font-medium text-gray-700 px-1">
              Email <span className="text-red-600">*</span>
            </span>
            <input
              type="text"
              name="email"
              placeholder="Type email here"
              className={inputClass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className={errorClass}>{formik.errors.email}</p>
            ) : (
              <p className="text-xs text-gray-500 mt-1">Required</p>
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <span className="text-sm font-medium text-gray-700 px-1">
              Message
            </span>
            <textarea
              name="message"
              placeholder="Type your message here"
              className={inputClass}
              rows={4}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <p className="text-xs text-gray-500 mt-1">Optional</p>
          </div>

          <div className="col-span-1 md:col-span-2 mt-4">
            <button
              type="submit"
              className="bg-gradient-btn px-6 py-2 text-white rounded-md"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
