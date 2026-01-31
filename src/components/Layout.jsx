import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <Nav theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main className="max-w-3xl mx-auto px-5 pb-20">{children}</main>
      <footer className="max-w-3xl mx-auto px-5 pb-10 text-sm opacity-70">
        © {new Date().getFullYear()} Siddesh Kamble
      </footer>
      {!hideChat && <ChatBot />}
</div>
  );
}
