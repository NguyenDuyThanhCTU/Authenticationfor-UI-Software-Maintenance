import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerReq } from "../../Redux/userSlice";

function Register({ onClose }) {
  const dispatch = useDispatch();
  const [isRegister, setRegister] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    const user = values;
    delete user.confirmPassword;
    delete user.firstName;
    delete user.lastName;
    dispatch(registerReq(user));
    setRegister(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#77BA9B]  bg-opacity-30 flex justify-center items-center z-50 ">
      {isRegister ? (
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded absolute  top-0"
          role="alert"
        >
          <strong class="font-bold">Success!</strong>
          <span class="">You have successfully registered. </span>
          <span class=" inline-block text-green-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
      ) : null}

      <div className="bg-white w-full max-w-md mx-4 rounded-md shadow-lg py-8 px-6">
        <div className="flex justify-end">
          <Link to="/">
            <button
              onClick={onClose}
              className="focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-full p-1 hover:bg-gray-200"
            >
              <FiX className="h-6 w-6" />
            </button>
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    First Name
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 mt-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 mt-2"
                  />
                </div>
              </div>
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
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 mt-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
