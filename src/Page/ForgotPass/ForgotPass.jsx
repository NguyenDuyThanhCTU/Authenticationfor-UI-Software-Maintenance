import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function ForgotPass() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#77BA9B]  bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md mx-4 rounded-md shadow-lg py-8 px-6">
        <div className="w-full max-w-md">
          <Link className="flex justify-end" to="/">
            <button className="focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-full p-1 hover:bg-gray-200">
              <FiX className="h-6 w-6" />
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-center mb-8">
            Forgot Password
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className=" px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-2"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  {isSubmitting ? "Loading..." : "Send Reset Link"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
