import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BackButton } from "@/components/auth/BackButton";
import { PageHeader } from "@/components/auth/PageHeader";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthButton } from "@/components/auth/AuthButton";
import { LockIcon } from "@/components/auth/icons";
import { PasswordIllustration } from "@/components/auth/illustrations/PasswordIllustration";

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
    <div className="w-full max-w-md px-6 pb-8 flex flex-col gap-6 md:max-w-xl lg:max-w-2xl">
      <div className="flex items-center mb-4">
        <BackButton />
      </div>

      <PageHeader
        title="Change Password"
        description="Please, enter your new password"
      />

      <PasswordIllustration />

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <AuthInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          placeholder="Password"
          icon={<LockIcon />}
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
          icon={<LockIcon />}
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

        <AuthButton type="submit" className="mt-4">
          Continue
        </AuthButton>
      </form>
    </div>
  );
}

export default ChangePassword;
