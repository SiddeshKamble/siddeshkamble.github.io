import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react";
import Nav from "./Nav";
import ChatBot from "./ChatBot";

export default function Layout({ children }) {
  const location = useLocation();
  const hideChat = location.pathname === "/chatbot";

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const email = "siddesh.kamble@techsmail.com";
  const github = "https://github.com/SiddeshKamble";
  const linkedin = "https://www.linkedin.com/in/siddeshkamble";

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)] flex flex-col">
      <Nav
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />

      <main className="flex-1 w-full max-w-3xl mx-auto px-5 pb-16">
        {children}
      </main>

      {/* ✅ Footer with icons */}
      <footer className="w-full border-t border-black/10 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-5 py-6 flex items-center justify-between gap-4">
          <div className="text-sm opacity-70">
            © {new Date().getFullYear()} Siddesh Kamble
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <Mail className="w-5 h-5 opacity-80" />
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <Github className="w-5 h-5 opacity-80" />
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <Linkedin className="w-5 h-5 opacity-80" />
            </a>
          </div>
        </div>
      </footer>

      {!hideChat && <ChatBot />}
    </div>
  );
}
