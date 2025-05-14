import React from "react";
import { BsFilePdf } from "react-icons/bs";

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

function EditInvoice() {
  return (
    <div style={{ height: "80vh", overflow: "auto" }} className="mb-20">
      <div className="flex items-center justify-end px-4 py-3 rounded-t-xl">
        <BsFilePdf className="w-6 h-6" />
      </div>
      <div className="overflow-x-auto rounded-lg w-full bg-white">
        <table className="table-auto w-full text-xs md:text-sm text-left text-gray-700">
          <thead className="bg-[#FFF8DC] font-semibold text-center">
            <tr>
              <th className="px-0.5 py-1">Date</th>
              <th className="px-0.5 py-1">Position</th>
              <th className="px-0.5 py-1">Rate</th>
              <th className="px-0.5 py-1">Regular Hours</th>
              <th className="px-0.5 py-1">Over Time Hours</th>
              <th className="px-0.5 py-1">Double Time Hours</th>
              <th className="px-0.5 py-1">Bill Misc Cost</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="px-2 py-1 whitespace-nowrap">{row.date}</td>
                <td className="px-0.5 py-1 whitespace-nowrap">
                  {row.position}
                </td>

                <td className="px-0.5 py-1 whitespace-nowrap">
                  <input
                    type="text"
                    className="bg-gray-100 rounded w-14"
                    placeholder="$"
                  />
                </td>
                <td className="px-0.5 py-1 whitespace-nowrap">
                  <input
                    type="text"
                    className="bg-gray-100 rounded w-14"
                    placeholder="$"
                  />
                </td>
                <td className="px-0.5 py-1 whitespace-nowrap">
                  <input
                    type="text"
                    className="bg-gray-100 rounded w-14"
                    placeholder="$"
                  />
                </td>
                <td className="px-0.5 py-1 whitespace-nowrap">
                  <input
                    type="text"
                    className="bg-gray-100 rounded w-14"
                    placeholder="$"
                  />
                </td>
                <td className="px-0.5 py-1 whitespace-nowrap">
                  <input
                    type="text"
                    className="bg-gray-100 rounded w-14"
                    placeholder="$"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditInvoice;
