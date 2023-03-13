import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { userSelector, useSelector } from "react-redux";

function LoginForm() {
  const user = useSelector((state) => state.user);
  const [isLogin, setLogin] = useState("");
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required(""),
    password: Yup.string().required(""),
  });

  const handleSubmit = (values) => {
    if (values.email == user.email || values.password == user.password) {
      setLogin("correct");
    }
    if (values.email != user.email && values.password != user.password)
      setLogin("uncorrect");
  };

  return (
    <div className="bg-[#77BA9B]  bg-opacity-30  w-full h-full fixed top-0 justify-center items-center flex   left-0 pt-56">
      {isLogin == "correct" ? (
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded absolute  top-0"
          role="alert"
        >
          <strong class="font-bold">Success!</strong>
          <span class="">You have successfully logged. </span>
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
      ) : isLogin == "uncorrect" ? (
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute  top-0"
          role="alert"
        >
          <strong class="font-bold">Error!</strong>
          <span class="">Incorrect email or password.</span>
          <span className="inline-block">
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
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </span>
        </div>
      ) : null}

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto relative mb-[335px]">
        <Link to="/">
          {" "}
          <button
            className="focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-full absolute top-0 right-0 m-4 p-1 hover:bg-gray-200"
            onClick={() => console.log("Exit button clicked")}
          >
            <FiX className="h-6 w-6" />
          </button>
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-2"
                />
              </div>
              <div className="mb-6">
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
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Login
              </button>
              <div className="mt-6">
                <p className="text-gray-600 text-center">
                  Don't have an account?{" "}
                  <Link to="/register">
                    <a href="#" className="text-indigo-500 font-bold">
                      Sign up here
                    </a>
                  </Link>
                </p>
                <p className="text-gray-600 text-center">
                  Forgot your password?{" "}
                  <Link to="/forgot">
                    <a href="#" className="text-indigo-500 font-bold">
                      here
                    </a>
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
