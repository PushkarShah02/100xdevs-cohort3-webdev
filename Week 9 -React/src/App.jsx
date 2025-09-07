import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(c => c + 1)
  }

  function decrease() {
    setCount2(c => c - 1)
  }

  return <div>
    <Counter count={count} count2={count2}/>
    <button onClick={increase}>Increase count</button>
    <button onClick={decrease}>decrease count</button>
  </div>
}


// mounting re-rendring unmounting
function Counter(props) {
  useEffect(function () {
    console.log("mount")

    return function () {
      console.log("unmount")
    }
  }, [])

  useEffect(function () {
    console.log("count has changed")

    return function(){
      console.log("Cleanup inside secound effect")
    }
  }, [props.count,props.count2])

  return <div>
    Counter {props.count} <br/>
    Counter {props.count2}
  </div>
}

export default App
