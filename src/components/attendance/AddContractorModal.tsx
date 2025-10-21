import { X, User, Mail, DollarSign } from "lucide-react";
import { useState } from "react";

interface AddContractorModalProps {
  onClose: () => void;
  onSubmit: (contractor: {
    firstName: string;
    lastName: string;
    email: string;
    rate: string;
  }) => void;
}

const AddContractorModal = ({ onClose, onSubmit }: AddContractorModalProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = () => {
    if (firstName && lastName && email && rate) {
      onSubmit({ firstName, lastName, email, rate });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-end justify-center z-50 bg-black/50">
      <div className="bg-white rounded-t-3xl w-full max-w-2xl pb-8 px-6 pt-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-black">Enter Details</h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-600 focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* First Name */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <User size={24} />
            </div>
            <input
              type="text"
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl pl-14 pr-4 py-4 text-base focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <User size={24} />
            </div>
            <input
              type="text"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl pl-14 pr-4 py-4 text-base focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={24} />
            </div>
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl pl-14 pr-4 py-4 text-base focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>

          {/* Rate */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 font-semibold text-xl">
              <DollarSign size={28} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder="Rate*"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl pl-14 pr-4 py-4 text-base focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-[#fbbf24] py-4 rounded-full text-xl font-semibold mt-12"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddContractorModal;
