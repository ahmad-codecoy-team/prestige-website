import PLS from "@/assets/PLS.png";
import { FaLocationArrow } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const JobDetails = () => {
  const location = useLocation();
  const { isLead } = location.state || { isLead: false };

  return (
    <div className="flex flex-col mb-20">
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

      <hr className="w-full h-0.5 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="text-md font-semibold text-gray-600 mt-4 text-center">
        Invoice Status : Waiting
      </div>

      <div className="flex items-center justify-between gap-2 w-full max-w-lg">
        <button
          className="mt-6 px-8 py-2 rounded-full  btn-primary w-full"
          style={{ color: "white" }}
          onClick={() => (window.location.href = "tel:5551234567")}
        >
          View Invoice
        </button>
        <Link
          to="/edit-invoice"
          state={{ isLead }}
          className="mt-6 px-8 py-2 rounded-full btn-primary w-full text-center"
          style={{ color: "white" }}
        >
          Edit Invoice
        </Link>
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

      <div className="flex items-center gap-2 mt-4  mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="text-md font-semibold text-gray-600 ">
          Approve Invoice
        </label>
      </div>
      <div className="flex items-center gap-2   mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="text-md font-semibold text-gray-600 ">
          Approve with Expedited Payment
        </label>
      </div>
      <div className="flex items-center gap-2   mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="text-md font-semibold text-gray-600 ">
          Edit Invoice
        </label>
      </div>

      <Link to="/attendance" state={{ isLead }} className="w-full max-w-lg">
        <button className="mt-4 px-8 py-2 rounded-full w-full text-white btn-primary">
          Send
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;
