import SidebarCard from "./components/basic-project-1";
import { useState, useEffect } from "react";

function App() {
  const [darkmode, setDarkmode] = useState(() => {
    // Load saved preference from localStorage
    return localStorage.getItem("theme") === "dark";
  });

  // Sync dark mode with <html> tag and localStorage
  useEffect(() => {
    if (darkmode) {
      console.log(document.documentElement.classList)
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      console.log(document.documentElement.classList)
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  // Toggle dark mode
  function flipMode() {
    setDarkmode((prev) => !prev);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white dark:bg-blue-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Dark Mode Demo</h1>

      <button
        onClick={flipMode}
        className="px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black hover:scale-105 transition-all"
      >
        {darkmode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
