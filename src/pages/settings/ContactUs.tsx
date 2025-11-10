import { FiMail, FiPhoneCall } from "react-icons/fi";
import SettingsLayout from "./SettingsLayout";

function ContactUs() {
  return (
    <SettingsLayout title="Contact Us">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-6">
        <div className="w-full max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <button className="bg-black rounded-lg p-4 md:p-5 text-center text-white font-semibold flex items-center justify-center gap-3 min-h-[60px] md:min-h-[70px] hover:opacity-90 transition-opacity active:scale-[0.98]">
              <FiPhoneCall className="w-5 h-5 md:w-6 md:h-6" /> 
              <span className="text-sm md:text-base">Call Us</span>
            </button>
            <button className="border-2 border-black rounded-lg p-4 md:p-5 text-center font-semibold flex items-center justify-center gap-3 min-h-[60px] md:min-h-[70px] hover:bg-black/5 transition-colors active:scale-[0.98]">
              <FiMail className="w-5 h-5 md:w-6 md:h-6" /> 
              <span className="text-sm md:text-base">Email</span>
            </button>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
}

export default ContactUs;
