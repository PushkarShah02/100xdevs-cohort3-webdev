import { useState, useEffect } from "react";
import { PostComponent } from "./Post/PostComponent";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Effect for value:", value);

    const interval = setInterval(() => {
      console.log(`Logging value: ${value}`);
    }, 1000);

    // ✅ Cleanup when value changes or component unmounts
    return () => {
      console.log("Cleanup for value:", value);
      clearInterval(interval);
    };
  }, [value]); // Runs whenever `value` changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Value: {value}</h2>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <button onClick={() => setValue(value - 1)}>Decrease</button>
      <button onClick={() => setValue(0)}>Reset</button>

    </div>
  );
}

export default App;


