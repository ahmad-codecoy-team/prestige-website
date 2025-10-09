import { AlertCircle } from "lucide-react";

const FallbackContent = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center bg-[#FCC40B]">
      <div className="flex flex-col items-center justify-center gap-4">
        <AlertCircle className="text-white w-12 h-12" />
        <h3 className="text-lg text-white font-semibold">{message}</h3>
      </div>
    </div>
  );
};

export default FallbackContent;
