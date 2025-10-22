// src/pages/attendance/WorkerAttendance.tsx
import QRCode from "react-qr-code";
import { ArrowLeft } from "lucide-react";
import { FaUserAlt } from "react-icons/fa";

const LeadQR = () => {
  return (
    <div className="min-h-screen bg-[#FCC40B] px-4">
      {/* Header */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-black py-4 text-center text-white flex items-center justify-start px-4 z-50">
        <button onClick={() => window.history.back()} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="flex-1 text-center">SIGN IN</h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center my-6 pt-20">
        <div className="w-24 h-24 rounded-full mb-2 flex items-center justify-center bg-gray-300">
          <FaUserAlt className="text-white text-3xl" />
        </div>
        <p className="text-lg font-semibold">Muhammad Ahmad</p>
      </div>

      {/* QR Code */}
      <div className="flex justify-center">
        <QRCode
          bgColor="transparent"
          size={250}
          style={{ height: "auto", maxWidth: "100%" }}
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
  );
};

export default LeadQR;
