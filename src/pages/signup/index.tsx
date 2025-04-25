import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Experiences from "./Experiences";
import Terms from "./Terms";
import I9Form from "./I9Form";

const steps = [
  "Personal Information",
  "Your Experiences",
  "Terms and Condition",
  "I9 Form",
];

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInformation />;
      case 1:
        return <Experiences />;
      case 2:
        return <Terms />;
      case 3:
        return <I9Form />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="w-full max-w-3xl mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      {/* Stepper */}
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-3 sm:space-y-0 rtl:space-x-reverse">
        {steps.map((label, index) => (
          <li
            key={index}
            className={`flex items-center space-x-3.5 rtl:space-x-reverse ${
              index === currentStep
                ? "text-accent"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${
                index === currentStep
                  ? "bg-stepper-circle text-white"
                  : "border-2 border-gray-300 text-gray-500 dark:border-gray-600 dark:bg-gray-700"
              }`}
            >
              {index + 1}
            </span>
            <span>
              <h3 className=" font-medium leading-tight">{label}</h3>
            </span>
          </li>
        ))}
      </ol>

      {/* Step Content */}
      <div className="mt-6">{renderStep()}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="btn disabled:opacity-50 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={currentStep === steps.length - 1 ? handleNext : handleSubmit}
          //   disabled={currentStep === steps.length - 1}
          className="btn-primary disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default MultiStepForm;
