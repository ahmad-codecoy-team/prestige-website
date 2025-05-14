import { FiPhoneCall } from "react-icons/fi";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import { useState } from "react";

function Attendance() {
  const location = useLocation();
  const { isLead } = location.state || { isLead: false };
  const [activeScanType, setActiveScanType] = useState<string | null>(null);

  const [scannedUser, setScannedUser] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const handleScanClick = (type: string) => {
    if (activeScanType === type) {
      return setActiveScanType(null); // close scanner if already open
    }

    setActiveScanType(type);
  };

  const handleScanResult = (result: string) => {
    console.log(result);
    try {
      const user = JSON.parse(result);
      setScannedUser(user);
      setShowModal(true);
      setActiveScanType(null); // close scanner
    } catch (e) {
      console.error("Invalid QR code data");
    }
  };

  const timeTypes = ["Time In", "Break Start", "Break End", "Time Out"];

  return (
    <>
      {showModal && scannedUser && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
            <img
              src={scannedUser?.image}
              alt={scannedUser?.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold text-center">
              {scannedUser?.name}
            </h2>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowModal(false)}
                className=" px-4 py-2 rounded-full btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isLead ? (
        <div style={{ height: "100vh", overflow: "auto" }} className="mb-4">
          <div className="text-center">104</div>
          <div className="text-center">Awan Town, Lahore, Pakistan</div>

          <div className="grid grid-cols-4 gap-4 mt-4 text-xs">
            {timeTypes.map((label) => (
              <div
                key={label}
                className={`text-center rounded-full mt-4 p-1 cursor-pointer hover:bg-gray-200 ${
                  activeScanType === label
                    ? "bg-[#f6a408] text-white"
                    : "bg-white"
                }`}
                onClick={() => handleScanClick(label)}
              >
                {label}
              </div>
            ))}
          </div>

          {activeScanType && (
            <div className="mt-4 border-2 border-gray-500">
              {/* @ts-ignore */}
              <Scanner
                allowMultiple={true}
                onScan={(result: any) => {
                  if (result[0]?.rawValue) {
                    handleScanResult(result[0]?.rawValue);
                  }
                }}
                onError={(error) => console.error("Scanner error:", error)}
              />
            </div>
          )}

          <div className="overflow-x-auto rounded-lg bg-white mt-4">
            <table className="w-full text-sm text-gray-700">
              <thead className="font-semibold">
                <tr>
                  <td className="px-2 py-1">Name</td>
                  <td className="px-2 py-1">Position</td>
                  <td className="px-2 py-1">Call</td>
                  <td className="px-2 py-1">Review</td>
                  {activeScanType && (
                    <td className="px-2 py-1">{activeScanType}</td>
                  )}
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td className="px-2 py-1">Abid Hussain</td>
                    <td className="px-2 py-1">Stagehand</td>
                    <td className="px-2 py-1">
                      <FiPhoneCall />
                    </td>
                    <td className="px-2 py-1">Hourly</td>
                    {activeScanType && <td className="px-2 py-1">08:10</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-4">
          <QRCode
            bgColor="transparent"
            size={250}
            style={{ height: "auto", maxWidth: "100%" }}
            value={JSON.stringify({
              name: "Abid Hussain",
              userId: 2,
              image:
                "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            })}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}
    </>
  );
}

export default Attendance;
