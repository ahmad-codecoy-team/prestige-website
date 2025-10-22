import { FiMail, FiPhoneCall } from "react-icons/fi";

function ContactUs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-10">
      <div className="bg-black rounded-md p-3 sm:p-4 text-center text-white font-bold flex items-center justify-center gap-2 min-h-[50px]">
        <FiPhoneCall className="w-4 h-4 sm:w-5 sm:h-5" /> 
        <span className="text-sm sm:text-base">Call Us</span>
      </div>
      <div className="border border-black rounded-md p-3 sm:p-4 text-center font-bold flex items-center justify-center gap-2 min-h-[50px]">
        <FiMail className="w-4 h-4 sm:w-5 sm:h-5" /> 
        <span className="text-sm sm:text-base">Email</span>
      </div>
    </div>
  );
}

export default ContactUs;
