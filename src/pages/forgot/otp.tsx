import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/auth/BackButton";
import { PageHeader } from "@/components/auth/PageHeader";
import { AuthButton } from "@/components/auth/AuthButton";
import { OTPInput } from "@/components/auth/OTPInput";
import { PhoneIllustration } from "@/components/auth/illustrations/PhoneIllustration";

function OTPVerification() {
  const navigate = useNavigate();

  const handleOTPComplete = (otp: string) => {
    if (otp.length === 6) {
      navigate("/change-password");
    }
  };

  return (
    <div className="w-full max-w-md px-6 pb-8 flex flex-col gap-6 md:max-w-xl lg:max-w-2xl">
      <div className="flex items-center mb-4">
        <BackButton />
      </div>

      <PageHeader
        title="OTP Verification"
        description="A 6 digit code sent to your email."
      />

      <PhoneIllustration />

      <div className="flex flex-col gap-6">
        <OTPInput onComplete={handleOTPComplete} />

        <AuthButton onClick={() => handleOTPComplete("123456")} className="mt-4">
          Continue
        </AuthButton>
      </div>
    </div>
  );
}

export default OTPVerification;
