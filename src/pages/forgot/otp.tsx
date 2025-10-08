import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/auth/BackButton";
import { PageHeader } from "@/components/auth/PageHeader";
import { AuthButton } from "@/components/auth/AuthButton";
import { OTPInput } from "@/components/auth/OTPInput";

function OTPVerification() {
  const navigate = useNavigate();

  const handleOTPComplete = (otp: string) => {
    if (otp.length === 6) {
      navigate("/change-password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-6">
      <div className="w-full max-w-md flex flex-col gap-6 md:max-w-xl">
        <div className="flex items-center">
          <BackButton />
        </div>

        <PageHeader
          title="OTP Verification"
          description="A 6 digit code sent to your email."
        />

        <div className="flex justify-center py-4">
          <img
            src="/verification-code-otp-icon.svg"
            alt="OTP Verification"
            className="w-28 h-28 md:w-32 md:h-32"
          />
        </div>

        <div className="flex flex-col gap-5">
          <OTPInput onComplete={handleOTPComplete} />

          <AuthButton onClick={() => handleOTPComplete("123456")} className="mt-2">
            Continue
          </AuthButton>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
