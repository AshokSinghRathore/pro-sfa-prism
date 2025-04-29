import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

export const ContactForm: React.FC = () => {
  return (
    <section className="py-28 px-4 w-full lg:max-w-7xl mx-auto">
      <div className="container mx-auto mb-20 text-center">
        <h3 className="text-lg font-bold text-blue-600 uppercase mb-2">
          Contact us form
        </h3>
        <p className="text-lg text-gray-500 mx-auto w-full px-4 lg:w-11/12 lg:px-8">
          Kindly fill all the required fields and we will connecting with you
          soon
        </p>
      </div>
      <Form />
    </section>
  );
};

export default ContactForm;


const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  const inputClass =
    "mt-2 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const errorClass = "text-xs text-red-600 mt-1";

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 border border-gray-300 p-4 rounded-md"
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

        <div>
          <span className="text-sm font-medium text-gray-700 px-1">
            Contact Number
          </span>
          <input
            type="text"
            name="contact"
            placeholder="Type contact number here"
            className={inputClass}
            onChange={formik.handleChange}
            value={formik.values.contact}
          />
          <p className="text-xs text-gray-500 mt-1">Optional</p>
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
    </>
  );
};

