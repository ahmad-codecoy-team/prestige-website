const ChatMessage = ({ text, time, isSender, reply }: any) => (
  <div
    className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2 px-2`}
  >
    <div
      className={`max-w-xs rounded-lg px-4 py-2 text-sm shadow-sm relative whitespace-pre-line
          ${isSender ? "bg-yellow-300 text-black" : "bg-white text-black"}`}
    >
      {reply && (
        <div className="bg-yellow-400 px-2 py-1 mb-1 rounded-md text-xs">
          <p className="font-medium">{reply.title}</p>
          <p className="text-[11px] text-gray-700">{reply.text}</p>
        </div>
      )}
      {text}
      <div className="text-[10px] text-right text-gray-600 mt-1">{time}</div>
    </div>
  </div>
);

export default ChatMessage;
