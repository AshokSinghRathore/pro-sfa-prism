import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiSendEmail } from "api/mail";
export const ContactForm: React.FC = () => {
  return (
    <>
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
        <div className="w-full grid lg:grid-cols-2">
          <div className="grid place-items-center mb-20">
            <div className="container mx-auto text-center">
              <div className="text-xl font-bold text-cyan-900 uppercase mb-2">
                <span className="text-blue-800">Code</span>
                <span className="text-orange-600">Aspire</span>
                <span className="text-blue-800 mx-1">|</span>
                <span className="text-orange-600">{`</>`}</span>
              </div>
              <p className="text-lg text-gray-500 mx-auto w-full px-4 lg:w-11/12 lg:px-8">
                Transforming visions into reality, our company specializes in
                delivering exceptional IT services.
              </p>
            </div>
            <div className="container mx-auto text-center">
              <h3 className="text-lg font-bold text-cyan-900 uppercase mb-2">
                Email
              </h3>
              <p className="text-lg text-gray-500 mx-auto w-full px-4 lg:w-11/12 lg:px-8">
                info@code-aspire.com
              </p>
            </div>
            <div className="container mx-auto text-center">
              <h3 className="text-lg font-bold text-cyan-900 uppercase mb-2">
                Contact
              </h3>
              <p className="text-lg text-gray-500 mx-auto w-full px-4 lg:w-11/12 lg:px-8">
                +91-933 616 6483
              </p>
            </div>
          </div>
          <div className="lg:grid-cols-1 flex justify-center items-center">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

export const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        await apiSendEmail({
          email: values.email,
          subject: `Prism SFA : Contact Form Submission from ${values.firstName} ${values.lastName}`,
          text: `
Name: ${values.firstName} ${values.lastName}
Email: ${values.email}
Contact: ${values.contact || "Not provided"}
Message: ${values.message}
            `.trim(),
        });
        toast.success(
          "🎉 Message sent successfully! We'll get back to you soon.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        resetForm();
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("❌ Failed to send message. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const inputClass =
    "mt-2 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const errorClass = "text-xs text-red-600 mt-1";

  return (
    <>
      <div className="relative container mx-auto max-w-6xl p-4">
        {/* Gradient shadow */}
        <div className="absolute -inset-1 rounded-md blur-xl opacity-50 bg-gradient-to-br from-blue-300 via-white to-blue-200"></div>

        <form
          onSubmit={formik.handleSubmit}
          className="relative z-10 container bg-white mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 p-4 rounded-md"
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
              className="bg-gradient-btn px-6 py-2 text-white rounded-md flex items-center justify-center gap-1"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                "Send Request"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
