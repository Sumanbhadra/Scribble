import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const RealTimeChat = () => {
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const chatContainerRef = useRef(null); // Reference to chat container for scrolling

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  // Listen for messages from the server
  useEffect(() => {
    socket.on("receive_message", (message) => {
      setReceivedMessages((prevMessages) => [...prevMessages, message]); // Add new message to the bottom
    });

    // Cleanup listener on component unmount
    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [receivedMessages]); // Trigger scroll when receivedMessages changes

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", message); // Emit the message to the server
      setReceivedMessages((prevMessages) => [...prevMessages, message]); // Add your own message to the bottom
      setMessage(""); // Clear the input after sending the message
    }
  };

  return (
    <div className="flex flex-col gap-2 w-56">
      <div
        ref={chatContainerRef} // Reference to the chat container for scrolling
        className="h-96 overflow-y-auto" // Make the container scrollable
      >
        <div className="mt-4">
          {receivedMessages.map((msg, index) => (
            <div
              key={index}
              className="p-2 bg-slate-100 rounded-sm mb-1 text-xs text-wrap"
            >
              {msg}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex mt-2">
        <input
          className="p-2 rounded-lg flex-grow outline-none"
          type="text"
          placeholder="Enter your message"
          value={message} // Bind the input value to the state
          onChange={(e) => setMessage(e.target.value)} // Update state on input change
        />
        <button
          className="p-2 bg-emerald-600 text-white rounded-lg ml-2"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default RealTimeChat;
