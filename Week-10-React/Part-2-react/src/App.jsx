import { useState, createContext, useContext } from 'react'

const BulbContext = createContext();

function BulbProvider({ children }) {
  const [isOn, setIsOn] = useState(false);
  return <div>
    <BulbContext.Provider value={{
      isOn: isOn,
      setIsOn: setIsOn
    }}>

      {children}

    </BulbContext.Provider>
  </div>

}

function App() {

  return <div>
    <BulbProvider>
      <LightBulb />
    </BulbProvider>
  </div>

}

function LightBulb() {

  return <div>
    <Bulbstate />
    <ToggelBulbState />
  </div>
}

function Bulbstate() {
  const { isOn } = useContext(BulbContext)
  return <div>
    {isOn ? "Bulb is On" : "Bulb is Off"}
  </div>
}

function ToggelBulbState() {
  const { setIsOn } = useContext(BulbContext)
  function toggle() {
    setIsOn(c => !c)
  }
  return <div>
    <button onClick={toggle}>Toggel Bulb</button>
  </div>
}

export default App
