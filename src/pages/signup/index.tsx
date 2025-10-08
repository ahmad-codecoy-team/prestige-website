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
      setFormData((prev) => ({ ...prev, personalInfo: data as Record<string, unknown> }));
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
    <div className="w-full max-w-md px-4 pb-8 flex flex-col gap-4 md:max-w-xl lg:max-w-2xl">
      {/* Back Button */}
      <div className="flex items-center mb-2">
        <BackButton onClick={handleBackStep} />
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-black text-center mb-4">
        Create Account
      </h1>

      {/* Step Indicator */}
      <StepIndicator steps={SIGNUP_STEPS} currentStep={currentStep} />

      {/* Form Content */}
      {renderStepContent()}
    </div>
  );
};

export default SignUp;
