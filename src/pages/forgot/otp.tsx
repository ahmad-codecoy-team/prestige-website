import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import password from "@/assets/forgot/password.png";

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
        OTP Verification <span></span>
      </p>

      <p className="text-md text-primary mt-4 text-center font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam
        praesentium odio, pariatur facere quam blanditiis doloribus laudantium a
        porro obcaecati illo itaque odit hic maxime natus et dicta consectetur.{" "}
      </p>

      <img
        className="w-32 h-32 object-contain mb-3 self-center"
        src={password}
        alt="Forgot password illustration"
      />

      {/* @ts-igonore */}

      <div className="flex justify-center gap-2 mb-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            onChange={(e) => handleChange(e, i)}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
          />
        ))}
      </div>

      <Link
        to={"/change-password"}
        className="self-center btn-primary w-100 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Verify
      </Link>
    </div>
  );
}

export default OTP;
