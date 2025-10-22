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
    <div className="w-full h-auto bg-white rounded-t-3xl pb-8 px-4 sm:px-6 pt-6">
      {/* Handle bar */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-1 bg-gray-900 rounded-full"></div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-black">Enter Details</h2>
        <button
          onClick={onClose}
          className="text-black hover:text-gray-600 focus:outline-none"
        >
          <X size={24} />
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
              className="w-full border-2 border-gray-300 rounded-xl pl-12 sm:pl-14 pr-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
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
          className="w-full bg-black text-[#fbbf24] py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold mt-8 sm:mt-12"
        >
          Save
        </button>
      </div>
  );
};

export default AddContractorModal;
