import { useState } from "react";
import PLS from "@/assets/PLS.png";
import { BsPin } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
const mockData = [
  { date: "02/26/25", position: "Supplier", time: "18:00 - 19:00", rate: 100 },
  { date: "02/26/25", position: "Manager", time: "16:00 - 18:00", rate: 150 },
  { date: "02/26/25", position: "Helper", time: "18:00 - 19:00", rate: 100 },
  { date: "02/26/25", position: "Developer", time: "18:00 - 19:00", rate: 100 },
  { date: "02/27/25", position: "Tester", time: "18:00 - 19:00", rate: 100 },
  { date: "02/27/25", position: "UI/UX", time: "18:00 - 19:00", rate: 100 },
  { date: "02/27/25", position: "Designer", time: "18:00 - 19:00", rate: 100 },
  { date: "02/27/25", position: "Supplier", time: "18:00 - 19:00", rate: 100 },
  { date: "02/27/25", position: "Manager", time: "18:00 - 19:00", rate: 100 },
];

const JobDetails = () => {
  const [bids, setBids] = useState(Array(mockData.length).fill(""));

  const handleBidChange = (index: number, value: string) => {
    const updatedBids = [...bids];
    updatedBids[index] = value;
    setBids(updatedBids);
  };

  const handleSubmit = () => {
    console.log("Submitted Bids:", bids);
  };

  return (
    <div className="flex flex-col items-center mb-20">
      {/* Header */}

      <div className="text-center mb-6">
        <div className="flex justify-center mb-2">
          <img src={PLS} className="w-20 h-20" />
        </div>
        <div className="font-semibold text-xl">Quotee Testing</div>
        <div className="text-gray-600">Job: #Testing</div>
        <div className="mt-1 text-sm bg-black text-white inline-flex items-center px-2 py-1 rounded-full gap-2">
          <FaLocationArrow /> Lahore
        </div>
      </div>

      <div className="text-lg font-semibold mb-4">Job Status: Available</div>

      <div className="overflow-x-auto rounded-lg w-full bg-white">
        <table className="table-auto w-full text-xs md:text-sm text-left text-gray-700">
          <thead className="bg-[#FFF8DC] font-semibold text-center">
            <tr>
              <th className="px-0.5 py-1">Date</th>
              <th className="px-0.5 py-1">Position</th>
              <th className="px-0.5 py-1">Call Time</th>
              <th className="px-0.5 py-1">Rate Type</th>
              <th className="px-0.5 py-1">Hourly Rate</th>
              <th className="px-0.5 py-1">Enter Bid</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="px-2 py-1 whitespace-nowrap">{row.date}</td>
                <td className="px-0.5 py-1 whitespace-nowrap">
                  {row.position}
                </td>
                <td className="px-0.5 py-1 whitespace-nowrap">{row.time}</td>
                <td className="px-0.5 py-1 whitespace-nowrap">Hourly</td>
                <td className="px-0.5 py-1 whitespace-nowrap">${row.rate}</td>
                <td className="px-0.5 py-1 whitespace-nowrap">
                  <input
                    type="text"
                    value={bids[index]}
                    onChange={(e) => handleBidChange(index, e.target.value)}
                    className="bg-gray-100 rounded w-14"
                    placeholder="$"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 px-8 py-2 rounded-full  btn-primary"
      >
        Submit
      </button>
    </div>
  );
};

export default JobDetails;
