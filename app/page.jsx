// app/page.js
"use client";

import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    // Add user input to the chat history
    const newHistory = [...chatHistory, { role: "user", text: userInput }];
    setChatHistory(newHistory);

    try {
      // Fetch response from API route
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput }),
      });

      const data = await res.json();

      // Add the bot response to the chat history
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "bot", text: data.response },
      ]);
      setUserInput(""); // Clear input
    } catch (error) {
      console.error("Error fetching response:", error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "bot", text: "Error fetching response. Please try again." },
      ]);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 className="pb-5 flex items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-300 to-pink-300 inline-block text-transparent bg-clip-text">BUU Chatbot-IT</h1>

      <div className='text-white' style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", height: "400px", overflowY: "scroll", marginBottom: "20px" }}>
        {chatHistory.map((entry, index) => (
          <div key={index} style={{ margin: "10px 0" }}>
            <strong>{entry.role === "user" ? "You" : "Chatbot"}:</strong>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask about investments..."
          style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
        />
        <div className="pt-6">
        <button type="submit"  className="transtion group flex h-12 w-60 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30 ">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
            <h1 className="hover:bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500  inline-block hover:text-transparent bg-clip-text hover:text-lg hover:transition hover:delay-300 duration-300 hover:ease-in-out">Send</h1>
          </div>
        </button>
        </div>

      </form>
    </div>
  );
}
