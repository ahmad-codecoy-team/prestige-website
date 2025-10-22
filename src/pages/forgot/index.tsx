import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiMail } from "react-icons/fi";
import { BackButton } from "@/components/auth/BackButton";
import { PageHeader } from "@/components/auth/PageHeader";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthButton } from "@/components/auth/AuthButton";

function ForgotPassword() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: () => {
      navigate("/otp");
    },
  });

  return (
    <div className="min-h-screen bg-[#FCC40B] flex flex-col px-4 py-6 sm:px-6 sm:py-8">
      <div className="w-full max-w-md mx-auto flex flex-col flex-1">
        <div className="flex items-center mb-6">
          <BackButton />
        </div>

        <PageHeader
          title="Forgot Password"
          description="Please, enter your email address. You will receive a link to create a new password via email."
        />

        <div className="flex justify-center py-6">
          <img
            src="/forgot-pass-icon.svg"
            alt="Forgot Password"
            className="w-32 h-32 md:w-40 md:h-40"
          />
        </div>

        <AuthInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          icon={<FiMail className="w-5 h-5 text-gray-400" />}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
        />

        <div className="mt-auto pb-4">
          <AuthButton type="submit" onClick={() => formik.handleSubmit()} variant="secondary">
            Continue
          </AuthButton>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
