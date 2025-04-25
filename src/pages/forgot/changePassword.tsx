import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import ChangePassword from "@/assets/forgot/ChangePassword.png";

function OTP() {
  const navigate = useNavigate();
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (value.length > 1) return;

    // Move to next input on character entry
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // Move to previous input on backspace
    if (!value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center p-4 max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <p className="text-3xl text-gray-900 dark:text-white font-bold text-center flex gap-2 justify-between">
        <FiArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />
        Change Password<span></span>
      </p>

      <p className="text-md text-primary mt-4 text-center font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam
        praesentium odio, pariatur facere quam blanditiis doloribus laudantium a
        porro obcaecati illo itaque odit hic maxime natus et dicta consectetur.{" "}
      </p>

      <img
        className="w-32 h-32 object-contain mb-3 self-center"
        src={ChangePassword}
        alt="Forgot password illustration"
      />

      {/* @ts-igonore */}

      <div className="relative mb-6 self-center">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM10 6a2 2 0 1 1 4 0v2h-4Zm2 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
        </div>

        <input
          type="password"
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Password"
        />
      </div>
      <div className="relative mb-6 self-center">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM10 6a2 2 0 1 1 4 0v2h-4Zm2 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
        </div>

        <input
          type="password"
          id="input-group-1"
          className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter New Password"
        />
      </div>

      <Link
        to={"/"}
        className="self-center btn-primary w-100 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </Link>
    </div>
  );
}

export default OTP;
