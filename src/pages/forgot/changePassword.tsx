import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { BackButton } from "@/components/auth/BackButton";
import { PageHeader } from "@/components/auth/PageHeader";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthButton } from "@/components/auth/AuthButton";

function ChangePassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: () => {
      navigate("/");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-6">
      <div className="w-full max-w-md flex flex-col gap-6 md:max-w-xl">
        <div className="flex items-center">
          <BackButton />
        </div>

        <PageHeader
          title="Change Password"
          description="Please, enter your new password"
        />

        <div className="flex justify-center py-4">
          <img
            src="/change-pass.svg"
            alt="Change Password"
            className="w-28 h-28 md:w-32 md:h-32"
          />
        </div>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        <AuthInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          placeholder="Password"
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
          error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
        />

        <AuthInput
          id="confirmPassword"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          label="Confirm Password"
          placeholder="Confirm Password"
          icon={<FiLock className="w-5 h-5 text-gray-400" />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="cursor-pointer"
            >
              {showConfirmPassword ? (
                <FiEyeOff className="w-5 h-5 text-gray-400" />
              ) : (
                <FiEye className="w-5 h-5 text-gray-400" />
              )}
            </button>
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : undefined}
        />

        <AuthButton type="submit" className="mt-2">
          Continue
        </AuthButton>
      </form>
      </div>
    </div>
  );
}

export default ChangePassword;
