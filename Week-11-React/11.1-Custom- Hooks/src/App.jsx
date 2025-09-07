import { useRef, useState } from "react";
import { usePrev } from "./Hooks/usePrev"


function useDebounce(originalfn) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current)
    currentClock.current = setTimeout(originalfn, 200)
  }
  return fn
}

function App() {
  function callSearchBackend() {
    fetch("api/amazon.com/search/")
  }

  const debounceFn = useDebounce(callSearchBackend)


  return <div>
    <input type="text" onChange={debounceFn} placeholder="Search here" />
  </div>

}

export default App
