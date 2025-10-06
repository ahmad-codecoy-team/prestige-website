export const LockIllustration = () => {
  return (
    <div className="flex justify-center my-8 md:my-12">
      <div className="relative">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center relative">
          <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-yellow-300 opacity-60"></div>
          <div className="absolute top-12 right-10 w-2 h-2 rounded-full bg-yellow-300 opacity-60"></div>
          <div className="absolute bottom-10 left-12 w-2 h-2 rounded-full bg-yellow-300 opacity-60"></div>
          <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-yellow-300 opacity-60"></div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2">
                <div className="w-2.5 h-2.5 bg-white rounded-full opacity-80"></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full opacity-80"></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full opacity-80"></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full opacity-80"></div>
              </div>
            </div>
            <div className="w-16 h-10 border-8 border-blue-400 rounded-t-full absolute -top-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
