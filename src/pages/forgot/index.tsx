import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BackButton } from "@/components/auth/BackButton";
import { PageHeader } from "@/components/auth/PageHeader";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthButton } from "@/components/auth/AuthButton";
import { EmailIcon } from "@/components/auth/icons";
import { LockIllustration } from "@/components/auth/illustrations/LockIllustration";

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
    <div className="w-full max-w-md px-6 pb-8 flex flex-col gap-6 md:max-w-xl lg:max-w-2xl">
      <div className="flex items-center mb-4">
        <BackButton />
      </div>

      <PageHeader
        title="Forgot Password"
        description="Please, enter your email address. You will receive a link to create a new password via email."
      />

      <LockIllustration />

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <AuthInput
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          icon={<EmailIcon />}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
        />

        <AuthButton type="submit" className="mt-4">
          Continue
        </AuthButton>
      </form>
    </div>
  );
}

export default ForgotPassword;
