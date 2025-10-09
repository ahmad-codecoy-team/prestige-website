interface Step {
  number: number;
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="pb-6 pt-4">
      <div className="flex justify-between items-start relative px-2">
        {/* Connecting Line */}
        <div className="absolute top-[22px] left-0 right-0 h-[2px] bg-gray-400" style={{ left: '12%', right: '12%' }} />

        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center gap-1 relative flex-1">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold transition-all relative z-10 ${
                step.number === currentStep
                  ? "bg-white text-black border-[3px] border-white shadow-md"
                  : step.number < currentStep
                  ? "bg-gray-300 text-black border-[3px] border-gray-300"
                  : "bg-gray-300 text-black border-[3px] border-gray-300"
              }`}
            >
              {step.number}
            </div>
            <span
              className={`text-[11px] font-medium text-center leading-tight max-w-[70px] mt-1 ${
                step.number === currentStep ? "text-black" : "text-black"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
