import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleApiCall } from "@/helper/call_api_helper";
import { postJwtLogin } from "@/helper/backend_helper";
import toast from "react-hot-toast";
import { AuthLogo } from "@/components/auth/AuthLogo";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthButton } from "@/components/auth/AuthButton";

const SignIn = () => {
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
          } else {
            toast.error("You have entered an invalid email address or password");
          }
        }
      );
    },
  });

  return (
    <div className="w-full max-w-md px-6 pb-8 flex flex-col gap-6 md:max-w-xl lg:max-w-2xl">
      <AuthLogo />

      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <AuthInput
          id="email"
          name="email"
          type="text"
          placeholder="Mobile number or email address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
        />

        <AuthInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
        />

        <AuthButton type="submit" className="mt-2">
          Log In
        </AuthButton>

        <div className="text-center mt-2">
          <Link to="/forgot" className="text-black text-base font-medium hover:underline">
            Forgotten Password?
          </Link>
        </div>
      </form>

      <div className="flex flex-col gap-4 mt-auto pt-8">
        <AuthButton variant="secondary" onClick={() => navigate("/signup")}>
          Create new account
        </AuthButton>

        <Link
          to="/home"
          className="text-center text-black text-base font-medium hover:underline flex items-center justify-center gap-2"
        >
          <span className="border-b-2 border-black">Continue as Guest</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
