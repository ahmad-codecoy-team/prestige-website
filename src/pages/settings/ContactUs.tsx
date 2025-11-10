import { FiMail, FiPhoneCall } from "react-icons/fi";
import SettingsLayout from "./SettingsLayout";

function ContactUs() {
  return (
    <SettingsLayout title="Contact Us">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
      <div className="bg-black rounded-md p-3 sm:p-4 text-center text-white font-bold flex items-center justify-center gap-2 min-h-[50px]">
        <FiPhoneCall className="w-4 h-4 sm:w-5 sm:h-5" /> 
        <span className="text-sm sm:text-base">Call Us</span>
      </div>
      <div className="border border-black rounded-md p-3 sm:p-4 text-center font-bold flex items-center justify-center gap-2 min-h-[50px]">
        <FiMail className="w-4 h-4 sm:w-5 sm:h-5" /> 
        <span className="text-sm sm:text-base">Email</span>
      </div>
        </div>
      </div>
    </SettingsLayout>
  );
}

export default ContactUs;
