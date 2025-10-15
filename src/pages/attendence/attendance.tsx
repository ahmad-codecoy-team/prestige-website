// // src/pages/attendance/Attendance.tsx
// import { FiPhoneCall } from "react-icons/fi";
// import { useLocation } from "react-router-dom";
// import QRCode from "react-qr-code";
// import { useState } from "react";
// import { FaUserAlt } from "react-icons/fa"; // Fallback icon for missing profile picture

// function Attendance() {
//   const location = useLocation();
//   const { isLead } = location.state || { isLead: false };
//   const [activeScanType, setActiveScanType] = useState<string | null>(null);
//   const [scannedUser, setScannedUser] = useState<any>(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleScanClick = (type: string) => {
//     if (activeScanType === type) {
//       return setActiveScanType(null); // close scanner if already open
//     }

//     setActiveScanType(type);
//   };

//   const handleScanResult = (result: string) => {
//     console.log(result);
//     try {
//       const user = JSON.parse(result);
//       setScannedUser(user);
//       setShowModal(true);
//       setActiveScanType(null); // close scanner
//     } catch (e) {
//       console.error("Invalid QR code data");
//     }
//   };

//   const timeTypes = ["Time In", "Break Start", "Break End", "Time Out"];

//   return (
//     <>
//       {showModal && scannedUser && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
//             <img
//               src={scannedUser?.image || "https://via.placeholder.com/150"}
//               alt={scannedUser?.name || "User"}
//               className="w-24 h-24 rounded-full mx-auto mb-4"
//             />
//             <h2 className="text-lg font-semibold text-center">
//               {scannedUser?.name || "Unknown User"}
//             </h2>

//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className=" px-4 py-2 rounded-full btn-primary"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {!isLead && (
//         <div className="min-h-screen bg-[#FCC40B] px-4">
//           {/* Header */}
//           <div className="w-full bg-black py-4 text-center text-white flex items-center justify-start px-4 fixed top-0 left-0 z-50">
//             <a href="/home" className="text-white text-xl">
//               &#8592; {/* Back arrow */}
//             </a>
//             <h1 className="flex-1 text-center">SIGN IN</h1>
//           </div>

//           {/* Profile Section */}
//           <div className="flex flex-col items-center my-6 pt-10">
//             {" "}
//             {/* Added pt-20 to give margin from top */}
//             {/* Profile Image with fallback */}
//             <div className="w-24 h-24 rounded-full mb-2 flex items-center justify-center bg-gray-300">
//               <FaUserAlt className="text-white text-3xl" />{" "}
//               {/* Static fallback icon */}
//             </div>
//             <p className="text-lg font-semibold">
//               {scannedUser?.name || "Muhammad Ahmad"}
//             </p>
//           </div>

//           {/* QR Code - Centered horizontally */}
//           <div className="flex justify-center">
//             <QRCode
//               bgColor="transparent"
//               size={250}
//               style={{ height: "auto", maxWidth: "100%" }}
//               value={JSON.stringify({
//                 name: "Nimra Razzaq",
//                 userId: 2,
//                 image:
//                   "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
//               })}
//               viewBox={`0 0 256 256`}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Attendance;

// src/pages/attendance/Attendance.tsx
import { useLocation } from "react-router-dom";
import WorkerAttendance from "./WorkerAttendence";
import LeadAttendance from "./LeadAttendence";

function Attendance() {
  const location = useLocation();
  const { isLead } = location.state || { isLead: false };

  return isLead ? <LeadAttendance /> : <WorkerAttendance />;
}

export default Attendance;
