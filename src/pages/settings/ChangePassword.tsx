import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { PageHeader } from "@/components/auth/PageHeader";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthButton } from "@/components/auth/AuthButton";
import SettingsLayout from "./SettingsLayout";

function ChangePassword() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Old password is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: () => {
      toast.success("Password Updated Successfully");
    },
  });

  return (
    <SettingsLayout title="Change Password">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-6">
        <div className="w-full max-w-lg mx-auto flex flex-col flex-1">

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

        <div className="space-y-4">
          <AuthInput
            id="oldPassword"
            name="oldPassword"
            type={showOld ? "text" : "password"}
            placeholder="Old Password"
            icon={<FiLock className="w-5 h-5 text-gray-400" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowOld(!showOld)}
                className="cursor-pointer"
              >
                {showOld ? (
                  <FiEyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <FiEye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.oldPassword}
            error={
              formik.touched.oldPassword && formik.errors.oldPassword
                ? (formik.errors.oldPassword as string)
                : undefined
            }
          />

          <AuthInput
            id="password"
            name="password"
            type={showNew ? "text" : "password"}
            placeholder="New Password"
            icon={<FiLock className="w-5 h-5 text-gray-400" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="cursor-pointer"
              >
                {showNew ? (
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
                ? (formik.errors.password as string)
                : undefined
            }
          />

          <AuthInput
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            icon={<FiLock className="w-5 h-5 text-gray-400" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="cursor-pointer"
              >
                {showConfirm ? (
                  <FiEyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <FiEye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? (formik.errors.confirmPassword as string)
                : undefined
            }
          />
        </div>

        <div className="mt-auto pb-2 pt-4">
          <AuthButton
            type="submit"
            onClick={() => formik.handleSubmit()}
            variant="secondary"
          >
            Continue
          </AuthButton>
        </div>
        </div>
      </div>
    </SettingsLayout>
  );
}

export default ChangePassword;
