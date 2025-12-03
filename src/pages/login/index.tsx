import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleApiCall } from "@/helper/call_api_helper";
import { postJwtLogin } from "@/helper/backend_helper";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthButton } from "@/components/auth/AuthButton";

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      // Trim whitespace from email and password
      const trimmedValues = {
        email: values.email.trim(),
        password: values.password.trim(),
      };

      setIsLoading(true);
      console.log("Submitting login with values:", trimmedValues);
      const headers = { headers: { "Content-Type": "application/json" } };
      try {
        await handleApiCall(
          () => postJwtLogin(trimmedValues, headers),
          "Logged In Successfully",
          (response) => {
            console.log("Login response:", response);
            console.log(response.data.data.user.Role.name);
            if (response.data.data.user.Role.name === "USER") {
              localStorage.setItem(
                "prestige-website",
                JSON.stringify(response.data.data)
              );
              navigate("/home");
            } else {
              // toast.error(
              //   "You have entered an invalid email address or password"
              // );
              navigate("/home");
            }
          }
        );
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="w-full max-w-4xl mx-auto flex flex-col flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <div className="w-full max-w-lg mx-auto flex flex-col flex-1">
          {/* Logo */}
          <div className="flex justify-center mt-4 mb-8">
            <img
              src="/logo.svg"
              alt="AV Workforce"
              className="h-20 md:h-24 w-auto"
            />
          </div>

          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            <AuthInput
              id="email"
              name="email"
              type="text"
              placeholder="Email*"
              icon={<FiMail className="w-5 h-5 text-gray-400" />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : undefined
              }
            />

            <AuthInput
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password*"
              icon={<FiLock className="w-5 h-5 text-gray-400" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  {showPassword ? (
                    <FiEyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <FiEye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : undefined
              }
            />

            <AuthButton type="submit" className="mt-2" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </AuthButton>

            <div className="text-center mt-2">
              <Link
                to="/forgot"
                className="text-white text-sm font-normal hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </form>

          <div className="flex flex-col gap-4 mt-auto pb-4">
            <AuthButton variant="primary" onClick={() => navigate("/signup")}>
              Create new account
            </AuthButton>

            <Link
              to="/home"
              className="text-center text-white text-sm font-normal hover:underline flex items-center justify-center gap-2"
            >
              <span className="underline">Continue as Guest</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
