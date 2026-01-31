import React from "react";
import ChatBot from "../components/ChatBot";

export default function ChatbotPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Conversational AI Chatbot</h1>
      <p className="mt-4 leading-relaxed opacity-90">
        An end-to-end conversational AI system designed for real-time responses with intent handling and context awareness.
      </p>

      <div className="mt-6 space-y-2 leading-relaxed opacity-90">
        <p><strong>What is used:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Python backend for NLP + model orchestration</li>
          <li>LLM API integration and prompt engineering</li>
          <li>Context/state handling for multi-turn conversations</li>
          <li>React UI for a fast chat experience</li>
        </ul>
      </div>

      <div className="mt-8 border border-[color:var(--border)] rounded-md overflow-hidden">
        <ChatBot defaultOpen={true} />
      </div>
    </section>
  );
}
