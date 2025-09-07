import { useState } from 'react'

function App() {
  return <div style={{backgroundColor:"grey"}}>
    <Card>
      <div style={{backgroundColor:"green"}}>hie their</div>
    </Card>
  </div>
}

function Card({ children }) {
  return <div style={{ backgroundColor: 'white', borderRadius: 10, color: 'black', padding: 10, margin: 10 }}>
    {children}
  </div>

}

export default App
