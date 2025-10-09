import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { BackButton } from "@/components/auth/BackButton";
import { PageHeader } from "@/components/auth/PageHeader";
import { AuthButton } from "@/components/auth/AuthButton";
import { OTPInput } from "@/components/auth/OTPInput";

function OTPVerification() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(50);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResendCode = () => {
    setTimer(50);
    setCanResend(false);
    toast.success("OTP code sent successfully");
  };

  const handleOTPComplete = (otp: string) => {
    if (otp.length === 6) {
      navigate("/change-password");
    }
  };

  return (
    <div className="min-h-screen bg-[#FCC40B] flex flex-col px-6 py-8">
      <div className="w-full max-w-md mx-auto flex flex-col flex-1">
        <div className="flex items-center mb-6">
          <BackButton />
        </div>

        <PageHeader
          title="OTP Verification"
          description="A 6 digit code sent to your email."
        />

        <div className="flex justify-center py-6">
          <img
            src="/verification-code-otp-icon.svg"
            alt="OTP Verification"
            className="w-32 h-32 md:w-40 md:h-40"
          />
        </div>

        <OTPInput onComplete={handleOTPComplete} />

        <div className="text-center mt-4">
          {canResend ? (
            <button
              onClick={handleResendCode}
              className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-black/90"
            >
              Resend Code
            </button>
          ) : (
            <p className="text-black text-xs md:text-sm font-normal">
              Resend Code In <span className="font-semibold text-gray-600">00:{timer.toString().padStart(2, "0")}</span>
            </p>
          )}
        </div>

        <div className="mt-auto pb-4">
          <AuthButton onClick={() => handleOTPComplete("123456")} variant="secondary">
            Proceed
          </AuthButton>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
