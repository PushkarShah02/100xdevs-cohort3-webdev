import { useState, useEffect } from "react";
import SidebarToggleSVG from "./components/icons/sidebarToggle";
import SidebarProjectSVG from "./components/icons/sidebarproject";
import SidebarSettingSVG from "./components/icons/sidebarsetting";
import SidebarHomeSVG from "./components/icons/sidebarhome";

function App() {
  const [sidebarOpen, setsidebarToggle] = useState(true)
  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setsidebarToggle={setsidebarToggle} />
      <MainContent sidebarOpen={sidebarOpen} />
    </div>
  );
}

function Sidebar({ sidebarOpen, setsidebarToggle }) {
  if (sidebarOpen) {
    return (
      <div className="w-64  min-h-screen bg-gray-800 text-white p-4 shadow-lg fixed md:relative">
        <div onClick={() => { setsidebarToggle(!sidebarOpen) }} className="mb-4"><SidebarToggleSVG /></div>
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Projects</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
        </ul>
      </div>
    );
  }

  else{
    return (
      <div className="w-14  min-h-screen bg-gray-800 text-white p-4 shadow-lg">
        <div onClick={() => { setsidebarToggle(!sidebarOpen) }} className="mb-4"><SidebarToggleSVG /></div>
        <ul >
          <li className="hover:bg-gray-700 mb-5 rounded cursor-pointer"><SidebarHomeSVG /></li>
          <li className="hover:bg-gray-700 mb-5 rounded cursor-pointer"><SidebarProjectSVG /></li>
          <li className="hover:bg-gray-700 mb-5 rounded cursor-pointer"><SidebarSettingSVG /></li>
        </ul>
      </div>
    );
  }

}

function MainContent() {
  return (
    <div className="flex-1 p-6">
      {/* Top Section */}
      <div className="h-48 bg-black rounded-xl mb-6 hidden md:block"></div>

      {/* Grid Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Card 1 */}
        <div className="h-96 rounded-2xl shadow bg-red-200 md:col-span-2 col-span-12 -translate-y-24 hidden md:block"></div>

        {/* Card 2 */}
        <div className="h-96 rounded-2xl shadow bg-green-200 md:col-span-5 col-span-12"></div>

        {/* Card 3 */}
        <div className="h-96 rounded-2xl shadow bg-yellow-200 md:col-span-4 col-span-12"></div>
      </div>
    </div>
  );
}

export default App;

