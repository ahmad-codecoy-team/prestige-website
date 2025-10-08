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
    <div className="mb-8 px-4 max-w-2xl mx-auto">
      <div className="flex justify-between items-center relative">
        {/* Connecting Line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 -z-10" style={{ left: '5%', right: '5%' }} />

        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center gap-2 relative" style={{ flex: 1 }}>
            {/* Progress Line */}
            {index > 0 && step.number <= currentStep && (
              <div
                className="absolute top-6 right-1/2 h-0.5 bg-black -z-10"
                style={{
                  width: '100%',
                  transform: 'translateX(-50%)'
                }}
              />
            )}

            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all relative z-10 ${
                step.number === currentStep
                  ? "bg-black text-white border-4 border-white shadow-lg scale-110"
                  : step.number < currentStep
                  ? "bg-black text-white border-2 border-white"
                  : "bg-white text-gray-600 border-2 border-gray-300"
              }`}
            >
              {step.number}
            </div>
            <span
              className={`text-[10px] md:text-xs font-medium text-center leading-tight max-w-[80px] ${
                step.number === currentStep ? "text-black font-bold" : "text-gray-600"
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
