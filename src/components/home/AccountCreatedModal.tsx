import { CheckCircle } from "lucide-react";
import ResponsiveModal from "@/components/ui/ResponsiveModal";

interface AccountCreatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToCompanies: () => void;
}

const AccountCreatedModal = ({
  isOpen,
  onClose,
  onApplyToCompanies,
}: AccountCreatedModalProps) => {
  return (
    <ResponsiveModal
      open={isOpen}
      onClose={onClose}
      ariaLabel="Account Created"
      cardClassName="bg-white"
      desktopMaxWidthClass="md:max-w-md"
    >
      <div className="p-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Decorative elements around the check */}
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -top-1 -right-3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
            <div className="absolute -bottom-2 -left-3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute -bottom-1 -right-2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
            <div className="absolute top-0 -right-4 w-0.5 h-4 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
            <div className="absolute -top-3 right-0 w-3 h-0.5 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
            
            {/* Main check circle */}
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-black mb-4">Account Created</h2>

        {/* Description */}
        <p className="text-gray-700 mb-8 text-base leading-relaxed">
          Congratulations! Your account has been created. In order to get work, you need to apply to work for a company.
        </p>

        {/* Apply Button */}
        <button
          onClick={onApplyToCompanies}
          className="w-full bg-black text-yellow-400 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
        >
          Apply to companies
          <span className="text-xl">→</span>
        </button>
      </div>
    </ResponsiveModal>
  );
};

export default AccountCreatedModal;