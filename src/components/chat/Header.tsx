import PLS from "@/assets/PLS.png";
import { FaArrowLeft } from "react-icons/fa";

const ChatHeader = () => (
  <div className="flex items-center justify-between px-4 py-3 rounded-t-xl">
    <div className="flex items-center gap-5">
      <FaArrowLeft onClick={() => window.history.back()}  className="cursor-pointer"/>
      <img src={PLS} alt="logo" className="rounded-full w-10 h-10" />
      <div>
        <h1 className="font-bold text-lg text-black">Group test</h1>
      </div>
    </div>
  </div>
);

export default ChatHeader;
