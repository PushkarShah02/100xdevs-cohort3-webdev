import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet, } from "react-router-dom"
import { useRef } from "react";
function App() {
    const inputRef = useRef();
    function FocusOnInput() {
        inputRef.current.focus();
    }
    return <div>
        <input ref={inputRef} type="text"></input>
        <button onClick={FocusOnInput}>Submit</button>
    </div>

}

export default App