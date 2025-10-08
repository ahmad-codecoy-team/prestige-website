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
    <div className="min-h-screen flex items-center justify-center py-8 px-6">
      <div className="w-full max-w-md flex flex-col gap-6 md:max-w-xl">
        <div className="flex items-center">
          <BackButton />
        </div>

        <PageHeader
          title="Forgot Password"
          description="Please, enter your email address. You will receive a link to create a new password via email."
        />

        <div className="flex justify-center py-4">
          <img
            src="/forgot-pass-icon.svg"
            alt="Forgot Password"
            className="w-28 h-28 md:w-32 md:h-32"
          />
        </div>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        <AuthInput
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          icon={<FiMail className="w-5 h-5 text-gray-400" />}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
        />

        <AuthButton type="submit" className="mt-2">
          Continue
        </AuthButton>
      </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
