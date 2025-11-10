// src/pages/attendance/WorkerAttendance.tsx
import QRCode from "react-qr-code";
import { ArrowLeft } from "lucide-react";
import { FaUserAlt } from "react-icons/fa";

const LeadQR = () => {
  return (
    <div className="h-screen bg-[#FCC40B] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 lg:left-[80px] bg-black z-50">
        <div className="w-full max-w-[1440px] mx-auto py-3 md:py-4 px-4 md:px-6 flex items-center">
          <button onClick={() => window.history.back()} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="flex-1 text-center text-white font-semibold text-lg md:text-xl">SIGN IN</h1>
          <div className="w-6" />
        </div>
      </div>

      {/* Content Container - Centered vertically */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-6 flex flex-col items-center justify-center pt-16 md:pt-20 pb-6 ">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6 md:mb-8">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-3 flex items-center justify-center bg-gray-300">
            <FaUserAlt className="text-white text-2xl md:text-3xl" />
          </div>
          <p className="text-base md:text-lg font-semibold">Muhammad Ahmad</p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[280px] md:max-w-[320px]">
            <QRCode
              bgColor="transparent"
              size={250}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={JSON.stringify({
                name: "Muhamad Ahmad",
                userId: 2,
                image:
                  "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
              })}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadQR;
