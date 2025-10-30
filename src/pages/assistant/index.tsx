import React, { useState } from "react";
import { ArrowLeft, Send, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoWhite from "../../assets/logo-white.svg";

const AssistantChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", text: "Hi! I'm your assistant. How can I help?", isSender: false, timestamp: "just now" },
  ] as { id: string; text: string; isSender: boolean; timestamp: string }[]);

  const handleSend = () => {
    if (!message.trim()) return;
    const newMsg = { id: Date.now().toString(), text: message, isSender: true, timestamp: "now" };
    setMessages((prev) => [...prev, newMsg]);
    setMessage("");
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-[#fbbf24] flex flex-col">
      {/* Header */}
      <div className="bg-[#fbbf24] text-black px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="text-black">
              <ArrowLeft size={28} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <img src={logoWhite} alt="Assistant" className="w-5 h-5 object-contain" />
              </div>
              <div className="text-xl font-semibold tracking-wide">Assistant</div>
            </div>
          </div>
          {/* No menu here */}
          <div className="w-6" />
        </div>
      </div>

      {/* Chat container */}
      <div className="flex-1 bg-white rounded-t-3xl flex flex-col shadow-lg lg:shadow-2xl lg:mx-4">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.isSender ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs lg:max-w-md rounded-2xl px-4 py-3 ${m.isSender ? "bg-[#fbbf24]" : "bg-gray-100"}`}>
                <p className="text-gray-900 text-sm">{m.text}</p>
                <p className="text-xs text-gray-500 mt-1 text-right">{m.timestamp}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2">
            <button className="text-black p-2">
              <Image size={24} />
            </button>
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={onKeyPress}
                placeholder="Type a message..."
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm"
              />
            </div>
            <button onClick={handleSend} disabled={!message.trim()} className="text-black p-2 disabled:opacity-30">
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantChat;