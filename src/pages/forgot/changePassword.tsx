import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
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
      toast.success("Password Updated Successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
  });

  return (
    <div className="min-h-screen bg-[#FCC40B] flex flex-col px-4 py-6 sm:px-6 sm:py-8">
      <div className="w-full max-w-md mx-auto flex flex-col flex-1">
        <div className="flex items-center mb-6">
          <BackButton />
        </div>

        <PageHeader
          title="Change Password"
          description="Please, enter your new password"
        />

        <div className="flex justify-center py-6">
          <img
            src="/change-pass.svg"
            alt="Change Password"
            className="w-32 h-32 md:w-40 md:h-40"
          />
        </div>

        <AuthInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
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

        <div className="mt-4">
          <AuthInput
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
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
        </div>

        <div className="mt-auto pb-4">
          <AuthButton type="submit" onClick={() => formik.handleSubmit()} variant="secondary">
            Continue
          </AuthButton>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
