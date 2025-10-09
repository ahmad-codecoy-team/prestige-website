// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { FiUser, FiMail, FiCalendar, FiPhone, FiLock, FiMapPin, FiMap } from "react-icons/fi";
// import { BsShieldLock } from "react-icons/bs";
// import { BiBuilding } from "react-icons/bi";
// import { ProfilePhotoUpload } from "@/components/auth/ProfilePhotoUpload";
// import { AuthInput } from "@/components/auth/AuthInput";
// import { AuthButton } from "@/components/auth/AuthButton";
// import { US_STATES } from "@/constants/signupData";
// import toast from "react-hot-toast";

// interface PersonalInfoFormProps {
//   onNext: (data: Record<string, unknown>) => void;
// }

// export const PersonalInfoForm = ({ onNext }: PersonalInfoFormProps) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       dateOfBirth: "",
//       phoneNumber: "",
//       socialSecurityNumber: "",
//       password: "",
//       confirmPassword: "",
//       address: "",
//       state: "",
//       city: "",
//       zipCode: "",
//       profilePhoto: null as File | null,
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string().required("First name is required"),
//       lastName: Yup.string().required("Last name is required"),
//       email: Yup.string().email("Invalid email address").required("Email is required"),
//       dateOfBirth: Yup.string().required("Date of birth is required"),
//       phoneNumber: Yup.string().required("Phone number is required"),
//       socialSecurityNumber: Yup.string().required("Social security number is required"),
//       password: Yup.string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password")], "Passwords must match")
//         .required("Confirm password is required"),
//       address: Yup.string().required("Address is required"),
//       state: Yup.string().required("State is required"),
//       city: Yup.string().required("City is required"),
//       zipCode: Yup.string().required("Zip code is required"),
//     }),
//     onSubmit: async (values) => {
//       setIsLoading(true);
//       try {
//         // Mock API call - replace with actual API later
//         console.log("Form submitted:", values);
//         await new Promise((resolve) => setTimeout(resolve, 1500));
//         toast.success("Personal information saved successfully!");
//         // Navigate to next step
//         onNext(values);
//       } catch (error) {
//         toast.error("Failed to save information");
//       } finally {
//         setIsLoading(false);
//       }
//     },
//   });

//   return (
//     <div className="flex flex-col flex-1">
//       {/* Profile Photo Upload */}
//       <div className="flex justify-center mb-6">
//         <ProfilePhotoUpload
//           onChange={(file) => formik.setFieldValue("profilePhoto", file)}
//         />
//       </div>

//       {/* Sign up Heading */}
//       <div className="text-center mb-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">Sign up</h2>
//         <p className="text-sm md:text-base text-black">Please create your profile</p>
//       </div>

//       {/* Form */}
//       <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 flex-1">
//         <AuthInput
//           id="firstName"
//           name="firstName"
//           type="text"
//           placeholder="First Name"
//           icon={<FiUser className="w-5 h-5 text-gray-400" />}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.firstName}
//           error={
//             formik.touched.firstName && formik.errors.firstName
//               ? formik.errors.firstName
//               : undefined
//           }
//         />

//         <AuthInput
//           id="lastName"
//           name="lastName"
//           type="text"
//           placeholder="Last Name"
//           icon={<FiUser className="w-5 h-5 text-gray-400" />}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.lastName}
//           error={
//             formik.touched.lastName && formik.errors.lastName
//               ? formik.errors.lastName
//               : undefined
//           }
//         />

//         <AuthInput
//           id="email"
//           name="email"
//           type="email"
//           placeholder="Email"
//           icon={<FiMail className="w-5 h-5 text-gray-400" />}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//           error={
//             formik.touched.email && formik.errors.email
//               ? formik.errors.email
//               : undefined
//           }
//         />

//         <AuthInput
//           id="dateOfBirth"
//           name="dateOfBirth"
//           type="date"
//           placeholder="Date of Birth"
//           icon={<FiCalendar className="w-5 h-5 text-gray-400" />}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.dateOfBirth}
//           error={
//             formik.touched.dateOfBirth && formik.errors.dateOfBirth
//               ? formik.errors.dateOfBirth
//               : undefined
//           }
//         />

//         <AuthInput
//           id="phoneNumber"
//           name="phoneNumber"
//           type="tel"
//           placeholder="Phone Number"
//           icon={<FiPhone className="w-5 h-5 text-gray-400" />}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.phoneNumber}
//           error={
//             formik.touched.phoneNumber && formik.errors.phoneNumber
//               ? formik.errors.phoneNumber
//               : undefined
//           }
//         />

//         <AuthInput
//           id="socialSecurityNumber"
//           name="socialSecurityNumber"
//           type="text"
//           placeholder="Social security Number"
//           icon={<BsShieldLock className="w-5 h-5 text-gray-400" />}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.socialSecurityNumber}
//           error={
//             formik.touched.socialSecurityNumber && formik.errors.socialSecurityNumber
//               ? formik.errors.socialSecurityNumber
//               : undefined
//           }
//         />

//         <AuthInput
//           id="password"
//           name="password"
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           icon={<FiLock className="w-5 h-5 text-gray-400" />}
//           rightIcon={
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               {showPassword ? (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                 </svg>
//               ) : (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               )}
//             </button>
//           }
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//           error={
//             formik.touched.password && formik.errors.password
//               ? formik.errors.password
//               : undefined
//           }
//         />

//         <AuthInput
//           id="confirmPassword"
//           name="confirmPassword"
//           type={showConfirmPassword ? "text" : "password"}
//           placeholder="Confirm Password"
//           icon={<FiLock className="w-5 h-5 text-gray-400" />}
//           rightIcon={
//             <button
//               type="button"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               {showConfirmPassword ? (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                 </svg>
//               ) : (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               )}
//             </button>
//           }
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.confirmPassword}
//           error={
//             formik.touched.confirmPassword && formik.errors.confirmPassword
//               ? formik.errors.confirmPassword
//               : undefined
//           }
//         />

//         <AuthInput
//           id="address"
//           name="address"
//           type="text"
//           placeholder="Address"
//           icon={<FiMapPin className="w-5 h-5 text-gray-400" />}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.address}
//           error={
//             formik.touched.address && formik.errors.address
//               ? formik.errors.address
//               : undefined
//           }
//         />

//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
//             <BiBuilding className="w-5 h-5 text-gray-400" />
//           </div>
//           <select
//             id="state"
//             name="state"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.state}
//             className={`w-full py-4 pl-12 pr-12 rounded-2xl text-base bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 appearance-none ${
//               formik.touched.state && formik.errors.state
//                 ? "border-2 border-red-500"
//                 : "border-0"
//             }`}
//           >
//             <option value="">State (List of all the states form USA)</option>
//             {US_STATES.map((state) => (
//               <option key={state.value} value={state.value}>
//                 {state.label}
//               </option>
//             ))}
//           </select>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
//             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
//           {formik.touched.state && formik.errors.state && (
//             <div className="text-red-600 text-sm mt-1 px-2">{formik.errors.state}</div>
//           )}
//         </div>

//         <AuthInput
//           id="city"
//           name="city"
//           type="text"
//           placeholder="City"
//           icon={<BiBuilding className="w-5 h-5 text-gray-400" />}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.city}
//           error={
//             formik.touched.city && formik.errors.city
//               ? formik.errors.city
//               : undefined
//           }
//         />

//         <AuthInput
//           id="zipCode"
//           name="zipCode"
//           type="text"
//           placeholder="Zip Code"
//           icon={<FiMap className="w-5 h-5 text-gray-400" />}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.zipCode}
//           error={
//             formik.touched.zipCode && formik.errors.zipCode
//               ? formik.errors.zipCode
//               : undefined
//           }
//         />

//         <div className="mt-auto pt-4">
//           <AuthButton type="submit" variant="secondary" disabled={isLoading}>
//             {isLoading ? "Saving..." : "Next"}
//           </AuthButton>
//         </div>
//       </form>
//     </div>
//   );
// };

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FiUser,
  FiMail,
  FiCalendar,
  FiPhone,
  FiLock,
  FiMapPin,
  FiMap,
} from "react-icons/fi";
import { BsShieldLock } from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import { ProfilePhotoUpload } from "@/components/auth/ProfilePhotoUpload";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthButton } from "@/components/auth/AuthButton";
import { US_STATES } from "@/constants/signupData";
import toast from "react-hot-toast";

interface PersonalInfoFormProps {
  onNext: (data: Record<string, unknown>) => void;
}

export const PersonalInfoForm = ({ onNext }: PersonalInfoFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: "",
      socialSecurityNumber: "",
      password: "",
      confirmPassword: "",
      address: "",
      state: "",
      city: "",
      zipCode: "",
      profilePhoto: null as File | null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      dateOfBirth: Yup.string().required("Date of birth is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      socialSecurityNumber: Yup.string().required(
        "Social security number is required"
      ),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
      address: Yup.string().required("Address is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      zipCode: Yup.string().required("Zip code is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast.success("Personal information saved successfully!");
        onNext(values);
      } catch {
        toast.error("Failed to save information");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="relative flex flex-col flex-1 h-full bg-[#FCC40B]">
      {/* Scrollable Form */}
      <div className="flex-1 overflow-y-auto  rounded-t-3xl px-4 pt-6 pb-32">
        <div className="flex justify-center mb-6">
          <ProfilePhotoUpload
            onChange={(file) => formik.setFieldValue("profilePhoto", file)}
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-black mb-2">Sign up</h2>
          <p className="text-sm text-black">Please create your profile</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          {/* (All AuthInputs remain same as before) */}
          <AuthInput
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            icon={<FiUser className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            error={
              formik.touched.firstName ? formik.errors.firstName : undefined
            }
          />
          <AuthInput
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            icon={<FiUser className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            error={formik.touched.lastName ? formik.errors.lastName : undefined}
          />
          <AuthInput
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            icon={<FiMail className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email ? formik.errors.email : undefined}
          />
          <AuthInput
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            icon={<FiCalendar className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
            error={
              formik.touched.dateOfBirth ? formik.errors.dateOfBirth : undefined
            }
          />
          <AuthInput
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            icon={<FiPhone className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            error={
              formik.touched.phoneNumber ? formik.errors.phoneNumber : undefined
            }
          />
          <AuthInput
            id="socialSecurityNumber"
            name="socialSecurityNumber"
            type="text"
            placeholder="Social Security Number"
            icon={<BsShieldLock className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.socialSecurityNumber}
            error={
              formik.touched.socialSecurityNumber
                ? formik.errors.socialSecurityNumber
                : undefined
            }
          />
          <AuthInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            icon={<FiLock className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password ? formik.errors.password : undefined}
          />
          <AuthInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            icon={<FiLock className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : undefined
            }
          />
          <AuthInput
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            icon={<FiMapPin className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            error={formik.touched.address ? formik.errors.address : undefined}
          />
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <BiBuilding className="w-5 h-5 text-gray-400" />
            </div>
            <select
              id="state"
              name="state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
              className={`w-full py-4 pl-12 pr-12 rounded-2xl bg-white text-gray-900 
              focus:outline-none focus:ring-2 focus:ring-black/20 appearance-none ${
                formik.touched.state && formik.errors.state
                  ? "border-2 border-red-500"
                  : "border-0"
              }`}
            >
              <option value="">State (List of all the states form USA)</option>
              {US_STATES.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>
          <AuthInput
            id="city"
            name="city"
            type="text"
            placeholder="City"
            icon={<BiBuilding className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            error={formik.touched.city ? formik.errors.city : undefined}
          />
          <AuthInput
            id="zipCode"
            name="zipCode"
            type="text"
            placeholder="Zip Code"
            icon={<FiMap className="w-5 h-5 text-gray-400" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipCode}
            error={formik.touched.zipCode ? formik.errors.zipCode : undefined}
          />
        </form>
      </div>

      {/* Fixed footer button (mobile) / inline (desktop) */}
      <div
        className="
        fixed bottom-0 left-0 right-0 bg-[#FCC40B] px-4 py-4 shadow-lg w-full
        md:static md:bg-transparent md:shadow-none md:mt-6
      "
      >
        <div className="max-w-md mx-auto w-full">
          <AuthButton
            type="submit"
            variant="secondary"
            disabled={isLoading}
            onClick={formik.submitForm}
          >
            {isLoading ? "Saving..." : "Next"}
          </AuthButton>
        </div>
      </div>
    </div>
  );
};
