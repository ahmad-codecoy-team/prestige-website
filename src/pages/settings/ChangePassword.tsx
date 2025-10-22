
function ChangePassword() {
  return (
    <>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative mb-1">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM10 6a2 2 0 1 1 4 0v2h-4Zm2 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Old Password"
          className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
        />
      </div>
      <div className="relative mb-1">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM10 6a2 2 0 1 1 4 0v2h-4Zm2 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="New Password"
          className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
        />
      </div>
      <div className="relative mb-1">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM10 6a2 2 0 1 1 4 0v2h-4Zm2 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Confirm Password"
          className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
        />
      </div>
    </div>
<div className="flex justify-center">

<button className="btn-primary self-auto py-2 px-10 rounded mt-4">Update</button>
</div>
    </>

  );
}

export default ChangePassword;
