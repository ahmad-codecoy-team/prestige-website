export const PasswordIllustration = () => {
  return (
    <div className="flex justify-center my-8 md:my-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-28 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl relative flex items-center justify-center">
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          <div className="absolute -top-8 w-20 h-12 border-8 border-blue-400 rounded-t-full"></div>
        </div>

        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-16 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
            <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-24 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
