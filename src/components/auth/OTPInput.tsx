import { useRef, useState } from "react";

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
}

export const OTPInput = ({ length = 6, onComplete }: OTPInputProps) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [otpValues, setOtpValues] = useState<string[]>(Array(length).fill(""));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.length > 1) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newOtpValues.every((val) => val !== "") && onComplete) {
      onComplete(newOtpValues.join(""));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-2 md:gap-3">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          value={otpValues[i]}
          className="w-10 h-12 md:w-14 md:h-16 text-center text-xl md:text-2xl font-semibold border-0 bg-white rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 text-black"
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
        />
      ))}
    </div>
  );
};
