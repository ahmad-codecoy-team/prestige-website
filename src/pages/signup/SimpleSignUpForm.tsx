//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  User,
  Mail,
  Calendar,
  Phone,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  Building,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { AuthInput } from "@/components/auth/AuthInput";
import { BackButton } from "@/components/auth/BackButton";
import { Checkbox } from "@/components/auth/Checkbox";
import { ProfilePhotoUpload } from "@/components/auth/ProfilePhotoUpload";
import { US_STATES } from "@/constants/signupData";

interface SignupValues {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  address: string;
  state: string;
  city: string;
  termsAccepted: boolean;
}

const validationSchema = Yup.object({
  firstName: Yup.string().trim().required("First name is required"),
  lastName: Yup.string().trim().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: Yup.string().required("Date of birth is required"),
  phoneNumber: Yup.string().required("Phone number is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),

  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),

  termsAccepted: Yup.boolean().oneOf([true], "Accept the terms to continue"),
});

const SimpleSignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { signupMutation } = useAuth();

  const formik = useFormik<SignupValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      address: "",
      state: "",
      city: "",
      termsAccepted: false,
    },

    validationSchema,

    onSubmit: (values) => {
      signupMutation.mutate({
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      });
    },
  });

  return (
    <div className="min-h-screen bg-[#FCC40B] flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="max-w-lg mx-auto w-full">
          <div className="flex items-center px-4 py-6 relative">
            <BackButton onClick={() => window.history.back()} />
            <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-bold text-black">
              Create Account
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full max-w-lg mx-auto px-4 pb-8">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center mb-6">
            <ProfilePhotoUpload />
            <h2 className="text-3xl font-bold text-black mt-4">Sign up</h2>
            <p className="text-gray-700">Create your profile</p>
          </div>

          <AuthInput
            label="First Name"
            placeholder="John"
            icon={<User />}
            {...formik.getFieldProps("firstName")}
            error={formik.touched.firstName && formik.errors.firstName}
          />

          <AuthInput
            label="Last Name"
            placeholder="Smith"
            icon={<User />}
            {...formik.getFieldProps("lastName")}
            error={formik.touched.lastName && formik.errors.lastName}
          />

          <AuthInput
            label="Email"
            type="email"
            icon={<Mail />}
            {...formik.getFieldProps("email")}
            error={formik.touched.email && formik.errors.email}
          />

          <AuthInput
            label="Date of Birth"
            type="date"
            icon={<Calendar />}
            {...formik.getFieldProps("dateOfBirth")}
            error={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
          />

          <AuthInput
            label="Phone"
            icon={<Phone />}
            {...formik.getFieldProps("phoneNumber")}
            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />

          <AuthInput
            label="Password"
            type={showPassword ? "text" : "password"}
            icon={<Lock />}
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
            rightIcon={
              <button type="button" onClick={() => setShowPassword((p) => !p)}>
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            }
          />

          <AuthInput
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            icon={<Lock />}
            {...formik.getFieldProps("confirmPassword")}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            rightIcon={
              <button
                type="button"
                onClick={() => setShowConfirmPassword((p) => !p)}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            }
          />

          <AuthInput
            label="Address"
            icon={<MapPin />}
            {...formik.getFieldProps("address")}
            error={formik.touched.address && formik.errors.address}
          />

          {/* State dropdown */}
          <div>
            <label className="text-sm">State</label>
            <select
              {...formik.getFieldProps("state")}
              className="w-full p-3 mt-1 rounded-lg"
            >
              <option value="">Select State</option>
              {US_STATES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>

            {formik.touched.state && formik.errors.state && (
              <div className="text-red-600 text-sm">{formik.errors.state}</div>
            )}
          </div>

          <AuthInput
            label="City"
            icon={<Building />}
            {...formik.getFieldProps("city")}
            error={formik.touched.city && formik.errors.city}
          />

          <Checkbox
            checked={formik.values.termsAccepted}
            onChange={(e) =>
              formik.setFieldValue("termsAccepted", e.target.checked)
            }
            label="I agree to the terms & conditions"
          />

          {formik.touched.termsAccepted && formik.errors.termsAccepted && (
            <div className="text-red-600 text-sm">
              {formik.errors.termsAccepted}
            </div>
          )}

          <button
            type="submit"
            disabled={signupMutation.isPending}
            className="w-full bg-black text-[#FCC40B] py-4 rounded-full text-lg font-semibold disabled:opacity-50"
          >
            {signupMutation.isPending ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimpleSignUpForm;
