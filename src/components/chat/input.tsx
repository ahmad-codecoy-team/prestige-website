import { FiSend } from "react-icons/fi";
import { FaPaperclip } from "react-icons/fa";

const ChatInput = () => (
  <div className="flex items-center px-10 py-3 bg-white rounded-b-xl">
    <FaPaperclip className="text-gray-400 text-xl mr-3" />
    <input
      type="text"
      placeholder="Write your message"
      className="flex-1 p-2 text-sm rounded-full bg-gray-100 outline-none"
    />
    <button className="ml-3 p-2 bg-yellow-400 text-white rounded-full">
      <FiSend className="text-xl" />
    </button>
  </div>
);

export default ChatInput;
