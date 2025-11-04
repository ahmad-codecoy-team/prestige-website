// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { StepIndicator } from "@/components/auth/StepIndicator";
// import { BackButton } from "@/components/auth/BackButton";
// import { PersonalInfoForm } from "./PersonalInfoForm";
// import { ExperiencesForm } from "./ExperiencesForm";
// import { TermsAndConditionsForm } from "./TermsAndConditionsForm";
// import { I9FormUpload } from "./I9FormUpload";
// import { SIGNUP_STEPS } from "@/constants/signupData";

// interface SignUpFormData {
//   personalInfo: Record<string, unknown>;
//   experiences: string[];
//   termsAccepted: boolean;
//   i9Form: File | null;
// }

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [currentStep, setCurrentStep] = useState(1);
//   const [, setFormData] = useState<SignUpFormData>({
//     personalInfo: {},
//     experiences: [],
//     termsAccepted: false,
//     i9Form: null,
//   });

//   const handleNextStep = (data?: Record<string, unknown> | string[] | File) => {
//     if (currentStep === 1 && data) {
//       setFormData((prev) => ({
//         ...prev,
//         personalInfo: data as Record<string, unknown>,
//       }));
//     } else if (currentStep === 2 && data) {
//       setFormData((prev) => ({ ...prev, experiences: data as string[] }));
//     } else if (currentStep === 3) {
//       setFormData((prev) => ({ ...prev, termsAccepted: true }));
//     } else if (currentStep === 4 && data) {
//       setFormData((prev) => ({ ...prev, i9Form: data as File }));
//     }

//     if (currentStep < SIGNUP_STEPS.length) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handleBackStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     } else {
//       navigate("/");
//     }
//   };

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return <PersonalInfoForm onNext={handleNextStep} />;
//       case 2:
//         return <ExperiencesForm onNext={handleNextStep} />;
//       case 3:
//         return <TermsAndConditionsForm onNext={() => handleNextStep()} />;
//       case 4:
//         return <I9FormUpload onComplete={handleNextStep} />;
//       default:
//         return <PersonalInfoForm onNext={handleNextStep} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#FCC40B] flex flex-col">
//       {/* Sticky Header and Stepper */}
//       <div className="sticky top-0 bg-[#FCC40B] z-50">
//         {/* Header */}
//         <div className="flex items-center px-4 py-6 relative">
//           <BackButton onClick={handleBackStep} />
//           <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-black">
//             Create Account
//           </h1>
//         </div>

//         {/* Step Indicator */}
//         <StepIndicator steps={SIGNUP_STEPS} currentStep={currentStep} />
//       </div>

//       {/* Form Content */}
//       <div className="flex-1 px-4 pb-4 w-full max-w-md mx-auto">
//         {renderStepContent()}
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepIndicator } from "@/components/auth/StepIndicator";
import { BackButton } from "@/components/auth/BackButton";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { ExperiencesForm } from "./ExperiencesForm";
import { TermsAndConditionsForm } from "./TermsAndConditionsForm";
import { I9FormUpload } from "./I9FormUpload";
import { SIGNUP_STEPS } from "@/constants/signupData";

interface SignUpFormData {
  personalInfo: Record<string, unknown>;
  experiences: string[];
  termsAccepted: boolean;
  i9Form: File | null;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [, setFormData] = useState<SignUpFormData>({
    personalInfo: {},
    experiences: [],
    termsAccepted: false,
    i9Form: null,
  });

  const handleNextStep = (data?: Record<string, unknown> | string[] | File) => {
    if (currentStep === 1 && data) {
      setFormData((prev) => ({
        ...prev,
        personalInfo: data as Record<string, unknown>,
      }));
    } else if (currentStep === 2 && data) {
      setFormData((prev) => ({ ...prev, experiences: data as string[] }));
    } else if (currentStep === 3) {
      setFormData((prev) => ({ ...prev, termsAccepted: true }));
    } else if (currentStep === 4 && data) {
      setFormData((prev) => ({ ...prev, i9Form: data as File }));
    }

    if (currentStep < SIGNUP_STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm onNext={handleNextStep} />;
      case 2:
        return <ExperiencesForm onNext={handleNextStep} />;
      case 3:
        return <TermsAndConditionsForm onNext={() => handleNextStep()} />;
      case 4:
        return <I9FormUpload onComplete={handleNextStep} />;
      default:
        return <PersonalInfoForm onNext={handleNextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCC40B] flex flex-col items-center">
      {/* Header + Stepper (aligned center on all screens) */}
      <div className="sticky top-0 z-50 bg-[#FCC40B] w-full">
        <div className="max-w-4xl mx-auto w-full">
          <div className="max-w-md mx-auto w-full">
            <div className="flex items-center px-4 py-6 relative">
              <BackButton onClick={handleBackStep} />
              <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-black">
                Create Account
              </h1>
            </div>
            <StepIndicator steps={SIGNUP_STEPS} currentStep={currentStep} />
          </div>
        </div>
      </div>

      {/* Scrollable Form Content */}
      <div className="flex-1 w-full max-w-4xl mx-auto overflow-hidden">
        <div className="max-w-md mx-auto w-full">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
