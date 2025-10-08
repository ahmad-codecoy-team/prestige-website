import { useState } from "react";
import { AuthButton } from "@/components/auth/AuthButton";
import { Checkbox } from "@/components/auth/Checkbox";
import { SignatureCanvas } from "@/components/auth/SignatureCanvas";
import { TERMS_TEXT } from "@/constants/termsData";
import toast from "react-hot-toast";

interface TermsAndConditionsFormProps {
  onNext: () => void;
}

export const TermsAndConditionsForm = ({ onNext }: TermsAndConditionsFormProps) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    console.log("Submit clicked - isAgreed:", isAgreed, "isSignatureEmpty:", isSignatureEmpty); // Debug log

    if (!isAgreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    if (isSignatureEmpty) {
      toast.error("Please provide your signature");
      return;
    }

    setIsLoading(true);
    try {
      // Mock API call - replace with actual API later
      console.log("Terms accepted with signature");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Terms accepted successfully!");
      onNext();
    } catch (error) {
      toast.error("Failed to accept terms");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignatureChange = (isEmpty: boolean) => {
    console.log("Signature changed - isEmpty:", isEmpty); // Debug log
    setIsSignatureEmpty(isEmpty);
  };

  return (
    <div className="flex flex-col gap-6 bg-[#FFD700] rounded-3xl p-6 md:p-8 w-full">
      {/* Terms Text */}
      <div className="space-y-4 text-black text-sm md:text-base leading-relaxed">
        {TERMS_TEXT.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Checkbox */}
      <div className="mt-2">
        <Checkbox
          label="I agree to the terms and conditions."
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
      </div>

      {/* Signature Canvas */}
      <SignatureCanvas onSignatureChange={handleSignatureChange} />

      {/* Submit Button */}
      <AuthButton
        type="button"
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "Processing..." : "Next"}
      </AuthButton>
    </div>
  );
};
