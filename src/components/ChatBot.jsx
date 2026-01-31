import { useState, useRef, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ABOUT_PARAGRAPHS, SKILLS, PROJECTS, EXPERIENCES, EMAIL } from "../data";

/**
 * Makes bot output more readable:
 * - Ensures headings have spacing
 * - Ensures bullets start on new lines
 * - Adds line breaks after sentences (basic)
 * - Collapses excessive blank lines
 */
function normalizeBotText(text) {
  if (!text) return "";

  return (
    text
      // ensure headings separated
      .replace(/(###\s.+)/g, "\n$1\n")
      // ensure bullets begin on new lines
      .replace(/•\s*/g, "\n• ")
      // add a newline after sentences (simple heuristic)
      .replace(/\. (?=[A-Z])/g, ".\n")
      // clean excessive newlines
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

export default function ChatBot({ defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  // Keep in sync when used as an embedded page component
  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! 👋 Ask me about Siddesh’s experience, projects, or skills (based on resume + portfolio).",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isThinking]);

  // Auto-focus input when opened (nice for /chatbot route)
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 60);
    return () => clearTimeout(t);
  }, [open]);

  function localAnswer(question) {
    const q = (question || "").toLowerCase();

    if (q.includes("email") || q.includes("contact")) {
      return `You can reach Siddesh at **${EMAIL}**.`;
    }

    if (q.includes("skill")) {
      return `### Skills\n\n• ${SKILLS.join("\n• ")}`;
    }

    if (q.includes("project")) {
      const top = PROJECTS.slice(0, 6).map((p) => `• **${p.title}** — ${p.description}`).join("\n");
      return `### Projects\n\n${top}\n\nAsk: “tell me more about RescueRoute” or “open chatbot live demo”.`;
    }

    if (q.includes("experience") || q.includes("work")) {
      const exp = EXPERIENCES.map((e) => `• **${e.org}** — ${e.role} (${e.time})`).join("\n");
      return `### Experience\n\n${exp}`;
    }

    if (q.includes("who") || q.includes("about")) {
      return `### About Siddesh\n\n${ABOUT_PARAGRAPHS.join("\n\n")}`;
    }

    return "I’m live on the portfolio, but my API may be sleeping. Try asking about **projects**, **experience**, or **skills**.";
  }

  const sendMessage = async () => {
    if (!input.trim() || isThinking) return;

    const question = input.trim();
    setInput("");

    setMessages((m) => [...m, { role: "user", text: question }]);
    setIsThinking(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const raw = await res.text();
      let data = null;
      try {
        data = JSON.parse(raw);
      } catch {}

      if (!res.ok) throw new Error("API unavailable");

      setMessages((m) => [...m, { role: "bot", text: data?.answer || "No response found." }]);
    } catch (err) {
      // Fallback so the chatbot always works locally (CRA) and when serverless API is sleeping.
      setMessages((m) => [...m, { role: "bot", text: localAnswer(question) }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50
                   bg-[color:var(--panel)] text-[color:var(--text)] border border-[color:var(--border)] p-4 rounded-full shadow-lg
                   border border-[color:var(--border)]
                   hover:shadow-xl hover:translate-y-[-1px] transition-all"
        aria-label="Open chatbot"
      >
        <Bot size={24} />
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-20 right-6 z-50 w-80 sm:w-96
                     bg-[color:var(--panel)]
                     rounded-2xl shadow-2xl
                     border border-[color:var(--border)]
                     overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-slate-900 text-white">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[color:var(--panelAlt)] flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div className="leading-tight">
                <div className="font-semibold">HelpBot Houdini</div>
                <div className="text-[11px] opacity-90">Resume + Portfolio assistant</div>
              </div>
            </div>

            <button onClick={() => setOpen(false)} aria-label="Close chatbot">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="p-4 space-y-3 max-h-80 overflow-y-auto text-sm">
            {messages.map((m, i) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={i}
                  className={[
                    "p-3 rounded-xl max-w-[92%] border shadow-sm",
                    isUser
                      ? "ml-auto text-right border-[color:var(--border)] bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                      : "bg-[color:var(--panel)] text-left border-[color:var(--border)]",
                  ].join(" ")}
                >
                  {isUser ? (
                    <div className="whitespace-pre-line leading-relaxed">
                      {m.text}
                    </div>
                  ) : (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h3: ({ children }) => (
                          <div className="text-sm font-semibold mb-3 mt-2 text-[color:var(--text)]">
                            {children}
                          </div>
                        ),
                        p: ({ children }) => (
                          <p className="leading-relaxed mb-2 last:mb-0 text-[color:var(--text)]">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="ml-5 list-disc space-y-1 mb-2 text-[color:var(--text)]">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="ml-5 list-decimal space-y-1 mb-2 text-[color:var(--text)]">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="leading-relaxed">{children}</li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-[color:var(--text)]">
                            {children}
                          </strong>
                        ),
                        code: ({ children }) => (
                          <code className="px-1 py-0.5 rounded bg-black/10">
                            {children}
                          </code>
                        ),
                      }}
                    >
                      {normalizeBotText(m.text)}
                    </ReactMarkdown>
                  )}
                </div>
              );
            })}

            {isThinking && (
              <div className="p-3 rounded-xl max-w-[70%] border shadow-sm bg-[color:var(--panel)] border-[color:var(--border)]">
                <div className="text-[color:var(--text)] opacity-80">Typing…</div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[color:var(--border)] bg-[color:var(--panel)]">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me something..."
                className="flex-1 px-3 py-2 rounded-xl
                           bg-slate-100 text-slate-900 placeholder-slate-500
                           dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-400
                           border border-[color:var(--border)]
                           outline-none text-sm
                           focus:ring-2 focus:ring-slate-300"
              />
              <button
                onClick={sendMessage}
                disabled={isThinking}
                className="p-2 rounded-xl text-white
                           bg-slate-900
                           hover:opacity-90
                           disabled:opacity-60 shadow-md"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>

            <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
              Try: “Who is Siddesh?”, “Summarize his experience”, “List projects”
            </div>
          </div>
        </div>
      )}
    </>
  );
}