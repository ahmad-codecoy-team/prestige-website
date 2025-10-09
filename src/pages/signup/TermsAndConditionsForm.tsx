// import { useState } from "react";
// import { AuthButton } from "@/components/auth/AuthButton";
// import { Checkbox } from "@/components/auth/Checkbox";
// import { SignatureCanvas } from "@/components/auth/SignatureCanvas";
// import { TERMS_TEXT } from "@/constants/termsData";
// import toast from "react-hot-toast";

// interface TermsAndConditionsFormProps {
//   onNext: () => void;
// }

// export const TermsAndConditionsForm = ({ onNext }: TermsAndConditionsFormProps) => {
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async () => {
//     console.log("Submit clicked - isAgreed:", isAgreed, "isSignatureEmpty:", isSignatureEmpty); // Debug log

//     if (!isAgreed) {
//       toast.error("Please agree to the terms and conditions");
//       return;
//     }

//     if (isSignatureEmpty) {
//       toast.error("Please provide your signature");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // Mock API call - replace with actual API later
//       console.log("Terms accepted with signature");
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       toast.success("Terms accepted successfully!");
//       onNext();
//     } catch (error) {
//       toast.error("Failed to accept terms");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSignatureChange = (isEmpty: boolean) => {
//     console.log("Signature changed - isEmpty:", isEmpty); // Debug log
//     setIsSignatureEmpty(isEmpty);
//   };

//   return (
//     <div className="flex flex-col flex-1">
//       {/* Privacy Policy Header */}
//       <div className="text-center mb-6">
//         <h2 className="text-xl md:text-2xl font-bold text-black">PRIVACY POLICY</h2>
//         <p className="text-xs md:text-sm text-black mt-1">Last Updated July 30, 2025</p>
//       </div>

//       {/* Terms Text */}
//       <div className="space-y-4 text-black text-xs md:text-sm leading-relaxed flex-1 overflow-y-auto">
//         {TERMS_TEXT.split('\n\n').map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>

//       {/* Checkbox */}
//       <div className="mt-4">
//         <Checkbox
//           label="I agree to the terms and conditions."
//           checked={isAgreed}
//           onChange={(e) => setIsAgreed(e.target.checked)}
//         />
//       </div>

//       {/* Signature Canvas */}
//       <div className="mt-4">
//         <SignatureCanvas onSignatureChange={handleSignatureChange} />
//       </div>

//       {/* Submit Button */}
//       <div className="mt-6">
//         <AuthButton
//           type="button"
//           onClick={handleSubmit}
//           disabled={isLoading}
//           variant="secondary"
//         >
//           {isLoading ? "Processing..." : "Next"}
//         </AuthButton>
//       </div>
//     </div>
//   );
// };

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// import { useState } from "react";
// import { AuthButton } from "@/components/auth/AuthButton";
// import { Checkbox } from "@/components/auth/Checkbox";
// import { SignatureCanvas } from "@/components/auth/SignatureCanvas";
// import { TERMS_TEXT } from "@/constants/termsData";
// import toast from "react-hot-toast";

// interface TermsAndConditionsFormProps {
//   onNext: () => void;
// }

// export const TermsAndConditionsForm = ({
//   onNext,
// }: TermsAndConditionsFormProps) => {
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSignatureChange = (isEmpty: boolean) => {
//     setIsSignatureEmpty(isEmpty);
//   };

//   const handleSubmit = async () => {
//     if (!isAgreed) {
//       toast.error("Please agree to the terms and conditions");
//       return;
//     }

//     if (isSignatureEmpty) {
//       toast.error("Please provide your signature");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       toast.success("Terms accepted successfully!");
//       onNext();
//     } catch {
//       toast.error("Failed to accept terms");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex flex-col flex-1 h-full bg-[#FCC40B]">
//       {/* Scrollable content */}
//       <div className="flex-1 overflow-y-auto px-4 pt-6 pb-32 max-w-md mx-auto w-full">
//         <div className="text-center mb-6">
//           <h2 className="text-xl md:text-2xl font-bold text-black">
//             PRIVACY POLICY
//           </h2>
//           <p className="text-xs md:text-sm text-black mt-1">
//             Last Updated July 30, 2025
//           </p>
//         </div>

//         <div className="space-y-4 text-black text-xs md:text-sm leading-relaxed">
//           {TERMS_TEXT.split("\n\n").map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>

//         <div className="mt-4">
//           <Checkbox
//             label="I agree to the terms and conditions."
//             checked={isAgreed}
//             onChange={(e) => setIsAgreed(e.target.checked)}
//           />
//         </div>

//         <div className="mt-4">
//           <SignatureCanvas onSignatureChange={handleSignatureChange} />
//         </div>
//       </div>

//       {/* Fixed footer button */}
//       <div
//         className="
//           fixed bottom-0 left-0 right-0 bg-[#FCC40B] px-4 py-4 shadow-lg w-full
//           md:static md:bg-transparent md:shadow-none md:mt-6
//         "
//       >
//         <div className="max-w-md mx-auto w-full">
//           <AuthButton
//             type="button"
//             onClick={handleSubmit}
//             disabled={isLoading}
//             variant="secondary"
//           >
//             {isLoading ? "Processing..." : "Next"}
//           </AuthButton>
//         </div>
//       </div>
//     </div>
//   );
// };

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// import { useState } from "react";
// import { AuthButton } from "@/components/auth/AuthButton";
// import { Checkbox } from "@/components/auth/Checkbox";
// import { SignatureCanvas } from "@/components/auth/SignatureCanvas";
// import { TERMS_TEXT } from "@/constants/termsData";
// import toast from "react-hot-toast";

// interface TermsAndConditionsFormProps {
//   onNext: () => void;
// }

// export const TermsAndConditionsForm = ({
//   onNext,
// }: TermsAndConditionsFormProps) => {
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSignatureChange = (isEmpty: boolean) => {
//     setIsSignatureEmpty(isEmpty);
//   };

//   const handleSubmit = async () => {
//     if (!isAgreed) {
//       toast.error("Please agree to the terms and conditions");
//       return;
//     }

//     if (isSignatureEmpty) {
//       toast.error("Please provide your signature");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       toast.success("Terms accepted successfully!");
//       onNext();
//     } catch {
//       toast.error("Failed to accept terms");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex flex-col flex-1 h-full bg-[#FCC40B]">
//       {/* Scrollable content */}
//       <div className="flex-1 overflow-y-auto px-4 pt-6 pb-40 max-w-md mx-auto w-full">
//         <div className="text-center mb-6">
//           <h2 className="text-xl md:text-2xl font-bold text-black">
//             PRIVACY POLICY
//           </h2>
//           <p className="text-xs md:text-sm text-black mt-1">
//             Last Updated July 30, 2025
//           </p>
//         </div>

//         <div className="space-y-4 text-black text-xs md:text-sm leading-relaxed">
//           {TERMS_TEXT.split("\n\n").map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>

//         {/* Checkbox */}
//         <div className="mt-6">
//           <Checkbox
//             label="I agree to the terms and conditions."
//             checked={isAgreed}
//             onChange={(e) => setIsAgreed(e.target.checked)}
//           />
//         </div>

//         {/* Signature Canvas */}
//         <div className="mt-4">
//           <SignatureCanvas onSignatureChange={handleSignatureChange} />
//         </div>
//       </div>

//       {/* ✅ Fixed footer button on all screens */}
//       <div className="fixed bottom-0 left-0 right-0 bg-[#FCC40B] px-4 py-4 shadow-lg w-full">
//         <div className="max-w-md mx-auto w-full">
//           <AuthButton
//             type="button"
//             onClick={handleSubmit}
//             disabled={isLoading}
//             variant="secondary"
//           >
//             {isLoading ? "Processing..." : "Next"}
//           </AuthButton>
//         </div>
//       </div>
//     </div>
//   );
// };

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

import { useState } from "react";
import { AuthButton } from "@/components/auth/AuthButton";
import { Checkbox } from "@/components/auth/Checkbox";
import { SignatureCanvas } from "@/components/auth/SignatureCanvas";
import { TERMS_TEXT } from "@/constants/termsData";
import toast from "react-hot-toast";

interface TermsAndConditionsFormProps {
  onNext: () => void;
}

export const TermsAndConditionsForm = ({
  onNext,
}: TermsAndConditionsFormProps) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignatureChange = (isEmpty: boolean) => {
    setIsSignatureEmpty(isEmpty);
  };

  const handleSubmit = async () => {
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Terms accepted successfully!");
      onNext();
    } catch {
      toast.error("Failed to accept terms");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col flex-1 h-full bg-[#FCC40B]">
      {/* Scrollable content */}
      <div className="relative z-0 flex-1 overflow-y-auto px-4 pt-6 pb-56 max-w-md mx-auto w-full">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-black">
            PRIVACY POLICY
          </h2>
          <p className="text-xs md:text-sm text-black mt-1">
            Last Updated July 30, 2025
          </p>
        </div>

        <div className="space-y-4 text-black text-xs md:text-sm leading-relaxed">
          {TERMS_TEXT.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Checkbox */}
        <div className="mt-6">
          <Checkbox
            label="I agree to the terms and conditions."
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
        </div>

        {/* Signature Canvas */}
        <div className="mt-4">
          <SignatureCanvas onSignatureChange={handleSignatureChange} />
        </div>
      </div>

      {/* ✅ Fixed footer button (all screens) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FCC40B] px-4 py-4 shadow-lg w-full z-10">
        <div className="max-w-md mx-auto w-full">
          <AuthButton
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            variant="secondary"
          >
            {isLoading ? "Processing..." : "Next"}
          </AuthButton>
        </div>
      </div>
    </div>
  );
};
