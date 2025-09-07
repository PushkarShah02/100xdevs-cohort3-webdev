import { useState, createContext, useContext } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from "./store/atom/counter";

const ThemeContext = createContext();

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {

  return (
    <div>
      <CurrentCount />
      <IncreaseCount />
      <DecreaseCount />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom)
  return <div>
    <h2>Count: {count}</h2>
  </div>
}

function IncreaseCount() {
  const setCount = useSetRecoilState(counterAtom)
  function increaseCount(){
    setCount(c=>c+1)
  }
  return <div> <button onClick={increaseCount}>Increase</button> </div>;
}

function DecreaseCount() {
  const setCount = useSetRecoilState(counterAtom)
  function decreaseCount(){
    setCount(c=>c-1)
  }
  return <div> <button onClick={decreaseCount}>Decrease</button> </div>;
}

export default App;
