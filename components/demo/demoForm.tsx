import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { VideoIntro } from "components/home";
import { toast } from "react-toastify";
import { apiSendEmail } from "api/mail";

export const DemoForm: React.FC = () => {
  return (
    <section className="py-14 sm:py-28 px-2 sm:px-4 w-full max-w-7xl mx-auto">
      <div className="container mx-auto text-center mb-8 sm:mb-12">
        <h3 className="text-base sm:text-lg font-bold text-blue-600 uppercase mb-2">
          Demo Request Form
        </h3>
        <p className="text-sm sm:text-lg text-gray-500 mx-auto w-full px-2 sm:px-4 lg:w-11/12 lg:px-8">
          Kindly fill all the required fields and we will contact you soon.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="flex justify-center items-center">
          <div className="container mx-auto text-center px-2 sm:px-4">
            <VideoIntro />
            <h3 className="text-sm sm:text-lg font-bold text-blue-600 uppercase mb-2 mt-4">
              Experience Prism SFA in Action — Automate, Accelerate & Empower
              Your Sales Team
            </h3>
            <p className="text-sm sm:text-lg text-gray-500 mx-auto w-full px-2 sm:px-4 lg:w-11/12 lg:px-8">
              Discover how Prism SFA can revolutionize your sales process. From
              real-time Reports to intelligent sales management, our Sales Force
              Automation platform gives your team the tools they need to perform
              at their best. Schedule a personalized demo today and see how
              Prism SFA helps you close more deals, streamline operations, and
              gain valuable insights — all from a single powerful dashboard.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
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
      numberOfEmployees: Yup.string().required(
        "Number Of Employees is required"
      ),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      try {
        await apiSendEmail({
          email: values.email,
          subject: `Prism SFA : Contact Form Submission from ${values.firstName} ${values.lastName}`,
          text: `
  Name: ${values.firstName} ${values.lastName}
  Email: ${values.email}
  Contact: ${values.contact || "Not provided"}
  Message: ${values.message}
  Date: ${date ? date.toLocaleDateString() : "Not provided"}
  Number of Employees: ${values.numberOfEmployees} 
              `.trim(),
        });
        resetForm();
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
        handleIsOpen?.();
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
        setSubmitting(false);
      }
    },
  });

  const inputClass =
    "mt-2 w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-h-[40px] sm:min-h-[44px]";
  const errorClass = "text-xs text-red-600 mt-1";

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
      <div className="relative">
        <div className="absolute -inset-1 rounded-b-md blur-xl opacity-50 bg-gradient-to-br from-blue-300 via-white to-blue-200"></div>

        <form
          onSubmit={formik.handleSubmit}
          className="relative z-10 bg-white p-3 sm:p-4 md:p-6 rounded-b-md shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
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
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
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

            <div className="flex flex-col relative">
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1 mb-1">
                Pick a Date
              </span>
              <button
                type="button"
                className={inputClass}
                onClick={() => setShowCalander(!showCalander)}
              >
                {date ? date.toLocaleDateString() : "Pick a date"}
              </button>
              {showCalander && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md p-2 shadow-lg z-50 max-w-full overflow-hidden">
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="react-day-picker w-full"
                  />
                </div>
              )}
            </div>

            <div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
                Contact <span className="text-red-600">*</span>
              </span>
              <input
                type="tel"
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
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
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
              {formik.touched.numberOfEmployees &&
              formik.errors.numberOfEmployees ? (
                <p className={errorClass}>{formik.errors.numberOfEmployees}</p>
              ) : (
                <p className="text-xs text-gray-500 mt-1">Required</p>
              )}
            </div>

            <div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
                Email <span className="text-red-600">*</span>
              </span>
              <input
                type="email"
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
          </div>

          <div className="mt-3 sm:mt-4">
            <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
              Message
            </span>
            <textarea
              name="message"
              placeholder="Type your message here"
              className={`${inputClass} resize-none`}
              rows={4}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <p className="text-xs text-gray-500 mt-1">Optional</p>
          </div>

          <div className="mt-4 sm:mt-6">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full sm:w-auto bg-gradient-btn px-6 py-2 sm:py-3 text-white rounded-md font-medium text-sm sm:text-base min-h-[40px] sm:min-h-[44px] disabled:opacity-50"
            >
              {formik.isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};