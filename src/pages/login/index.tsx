import Logo from "@/components/ui/Logo";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleApiCall } from "@/helper/call_api_helper";
import { postJwtLogin } from "@/helper/backend_helper";
import toast from "react-hot-toast";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      const headers = { headers: { "Content-Type": "application/json" } };
      await handleApiCall(
        () => postJwtLogin(values, headers),
        "",
        (response) => {
          console.log(response.data.data.user.Role.name);
          if (response.data.data.user.Role.name === "USER") {
            localStorage.setItem(
              "prestige-website",
              JSON.stringify(response.data.data)
            );
            navigate("/home");
          } else
            toast.error(
              "You have entered an invalid email address or password"
            );
        }
      );
      // Simulate login and navigate
    },
  });

  return (
    <div className="w-full max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <p className="text-4xl text-gray-900 dark:text-white font-bold text-center">
          Sign in
        </p>
        <p className="text-md text-primary text-center">
          Enter your email and password
        </p>

        {/* Email */}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Email
        </label>
        <div className="relative mb-1">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`bg-gray-50 border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}

        {/* Password */}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Password
        </label>
        <div className="relative mb-1">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM10 6a2 2 0 1 1 4 0v2h-4Zm2 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`bg-gray-50 border ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        )}

        {/* Forgot */}
        <div className="flex items-start">
          <Link
            to="/forgot"
            className="ms-auto text-sm text-black-700 hover:underline bold"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-primary w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign In
        </button>

        {/* Signup */}
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="hover:underline text-secondary font-bold"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
