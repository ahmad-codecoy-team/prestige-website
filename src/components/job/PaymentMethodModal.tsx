import { useState } from "react";

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (method: "E-Check" | "Direct Deposit") => void;
}

const PaymentMethodModal = ({
  isOpen,
  onClose,
  onSubmit,
}: PaymentMethodModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState<
    "E-Check" | "Direct Deposit"
  >("E-Check");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit(selectedMethod);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 px-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-3xl w-full max-w-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Payment method
        </h2>

        <p className="text-center text-gray-600 mb-8 text-lg">
          Please select your preferred payment method
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 mb-10">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="E-Check"
              checked={selectedMethod === "E-Check"}
              onChange={(e) => setSelectedMethod(e.target.value as "E-Check")}
              className="w-6 h-6 accent-[#FCC40B]"
            />
            <span className="text-xl md:text-2xl font-medium">E-Check</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Direct Deposit"
              checked={selectedMethod === "Direct Deposit"}
              onChange={(e) =>
                setSelectedMethod(e.target.value as "Direct Deposit")
              }
              className="w-6 h-6 accent-[#FCC40B]"
            />
            <span className="text-xl md:text-2xl font-medium">
              Direct Deposit
            </span>
          </label>
        </div>
 <div className="flex justify-center">
   <button
     onClick={handleSubmit}
     className="
       w-full         /* Full width on small screens */
       max-w-sm       /* Add a nice centered max width */
       bg-[#FCC40B] text-black font-bold
       text-xl md:text-2xl
       py-4 rounded-full
       hover:bg-[#e5b00a] transition-colors
     "
   >
     Submit
   </button>
 </div>
      </div>
    </div>
  );
};

export default PaymentMethodModal;
