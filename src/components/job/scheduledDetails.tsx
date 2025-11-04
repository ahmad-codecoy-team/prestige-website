import PLS from "@/assets/PLS.png";
import { getScheduleDetails } from "@/helper/backend_helper";
import { handleApiCall } from "@/helper/call_api_helper";
import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { RiGroupFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const JobDetails = () => {
  const location = useLocation();
  const { isLead } = location.state || { isLead: false };
  const shift = location.state?.shift;

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      await handleApiCall(
        () => getScheduleDetails(shift?.shift?.id),
        "",
        (response: unknown) => {
          console.log(response);
          // setShifts(response.data.data);
        }
      );
      // setLoading(false);
    };
    fetchData();
  }, [shift?.shift?.id]);

  return (
    <div className="flex flex-col items-center mb-20">
      {/* Header */}

      <RiGroupFill className="w-6 h-6 absolute top-22 right-5" />

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

      <div className="text-lg font-semibold mb-4">Job Status: Scheduled</div>
      <hr className="w-full h-0.5 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="text-md font-semibold text-gray-600 mt-4">
        Shift Notes : lorem ipsum
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700  mt-4 w-full max-w-lg">
        <div className="flex items-center justify-between mt-3">
          <div>Date:</div>
          <div>April 30, 2023</div>
        </div>
        <hr className="w-full h-0.5 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex items-center justify-between mt-3">
          <div>Position:</div>
          <div>Stagehand</div>
        </div>
        <hr className="w-full h-0.5 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex items-center justify-between mt-3">
          <div>Call Time:</div>
          <div>08:00 - 13:00</div>
        </div>
        <hr className="w-full h-0.5 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex items-center justify-between mt-3">
          <div>Rate Type: </div>
          <div>April 30, 2023</div>
        </div>
        <hr className="w-full h-0.5 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex items-center justify-between mt-3">
          <div>Bid: </div>
          <div>$50</div>
        </div>
      </div>
      {/* Submit Button */}
      {!isLead && (
        <div className="flex items-center justify-between gap-2 w-full max-w-lg">
          <button
            className="mt-6 px-8 py-2 rounded-full  btn-primary w-full"
            onClick={() => (window.location.href = "tel:5551234567")}
          >
            Call Lead
          </button>
          <button
            className="mt-6 px-8 py-2 rounded-full  btn-primary w-full"
            onClick={() => (window.location.href = "tel:5551234567")}
          >
            Call Office
          </button>
        </div>
      )}

      {isLead && (
        <div
          className="flex items-center justify-between gap-2 w-full max-w-lg"
          onClick={() => (window.location.href = "tel:5551234567")}
        >
          <button className="mt-6 px-8 py-2 rounded-full  btn-primary w-full">
            Call Office
          </button>
        </div>
      )}
      <Link
        to={`/home/jobs/${shift?.shift?.id ?? shift?.id ?? ""}/attendance/${isLead ? "lead" : "worker"}`}
        state={{ isLead }}
        className="w-full max-w-lg"
      >
        <button className="mt-4 px-8 py-2 rounded-full w-full bg-green-500 hover:bg-green-600 text-white">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;
