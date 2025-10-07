import React, { useEffect, useRef, useState } from "react";

const STARTUP_LINE =
  "Seva: Hi — I’m Seva, your health assistant. I can help with general health info. If this is critical, I’ll advise you to see a doctor.";

const ChatWindow = ({ open, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [animState, setAnimState] = useState("closed");
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: STARTUP_LINE },
    { id: 2, from: "bot", text: "How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);

  // --- animation lifecycle ---
  useEffect(() => {
    if (open) {
      setVisible(true);
      requestAnimationFrame(() => setAnimState("opening"));
      setTimeout(() => setAnimState("open"), 250);
    } else if (visible) {
      setAnimState("closing");
      setTimeout(() => {
        setAnimState("closed");
        setVisible(false);
      }, 300);
    }
  }, [open]);

  // --- scroll to bottom on new messages ---
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // --- send message logic ---
  const sendMessage = async () => {
    if (!input.trim()) return;
    const msgText = input.trim();
    const userMsg = { id: Date.now(), from: "user", text: msgText };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msgText, sessionId: "health-bot" }),
      });

      if (!resp.ok) throw new Error(await resp.text());
      const data = await resp.json();
      const botMsg = {
        id: Date.now() + 1,
        from: "bot",
        text:
          data.reply ||
          "Sorry, I’m having trouble understanding that. Could you rephrase?",
      };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 2,
          from: "bot",
          text: "Sorry — something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center"
      aria-hidden={!open}
    >
      <div
        className={`w-full max-w-md md:max-w-2xl bg-white rounded-t-2xl shadow-2xl flex flex-col overflow-hidden transition-all
        ${animState === "opening" ? "animate-slideUp" : ""}
        ${animState === "closing" ? "animate-slideDown" : ""}
        h-[90vh]`}
        role="dialog"
        aria-modal="true"
      >
        {/* Top drag bar */}
        {/* <div className="flex justify-center pt-2 pb-1">
          <div
            onClick={onClose}
            className="w-12 h-1.5 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition"
            title="Close chat"
          ></div>
        </div> */}

        {/* Header */}
        <div className="relative flex items-center justify-center border-b shadow-sm h-12">
          <div className="text-sm font-medium text-gray-700">
            General Health and Questions
          </div>
          <button
            onClick={onClose}
            className="absolute right-3 text-gray-500 hover:text-gray-700 transition"
            aria-label="Close chat"
          >
            ✖
          </button>
        </div>

        {/* Chat messages */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto p-4 space-y-3 bg-white"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.from === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`${
                  m.from === "bot"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-[#236a68] text-white"
                } max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-2 rounded-lg">
                <div className="inline-block animate-pulse text-xs text-gray-500">
                  Seva is typing...
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-3 border-t bg-white shrink-0">
          <div className="text-xs text-gray-500 mb-2">
            ⚠️ Informational only — not a substitute for medical care.
          </div>
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Describe your symptoms..."
              className="flex-1 p-2.5 text-[12px] font-semibold border rounded-md h-10 resize-none focus:outline-none focus:ring focus:ring-[#236a68]/30"
            />
            <button
              onClick={sendMessage}
              className="bg-[#236a68] text-white px-4 py-2 rounded-md h-10 hover:opacity-95 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;









//  <div className="flex gap-2">
//             <textarea
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={onKeyDown}
//               placeholder="Describe your symptoms "
//               className="flex-1 p-2.5 text-[12px]  border rounded-md h-10 resize-none focus:outline-none focus:ring-1 focus:ring-[#236a68]"
//             />