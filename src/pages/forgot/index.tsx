import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import password from "@/assets/forgot/password.png";
function index() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex flex-col gap-2 justify-center p-4 max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        <p className="text-3xl text-gray-900 dark:text-white font-bold text-center flex gap-2 justify-between">
          <FiArrowLeft onClick={() => navigate(-1)} />
          Forgot Password
          <span></span>
        </p>
        <p className="text-md text-primary mt-4 text-center font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
          sunt placeat doloremque, repellat, nisi eveniet tempore minus qui
          repellendus molestias animi molestiae? Deleniti veritatis molestias
          obcaecati, iusto eaque nostrum.
        </p>

        <img
          className="w-32 h-32 object-contain mb-3 self-center"
          src={password}
          alt="Bonnie image"
        />
        <div className="flex flex-col items-center ">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <Link
          to={"/otp"}
          className="self-center btn-primary w-100 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Continue
        </Link>
      </div>
    </>
  );
}

export default index;
