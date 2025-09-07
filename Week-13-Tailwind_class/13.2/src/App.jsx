import SidebarCard from "./components/basic-project-1";
import { useState } from "react";

function App() {
  const [darkmode, setDarkmode]= useState(true)

  function flipMode(){
    setDarkmode(c=>!c)
  }
  return (
    <div className={`h-screen ${darkmode ? "bg-blue-900" : "bg-white"}`}>
      <button className="bg-grey-500" onClick={flipMode}>Click Me</button>
    </div>
  );
}

export default App;
