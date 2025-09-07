

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-900 h-screen">
      
      <div>LOGO</div>
      <div>LOGO</div>
      <TextBoxComp/>
      <ButtonComp/>
    </div>
  );
}

function ButtonComp(){
  return (
    <div className="bg-blue-300 text-white rounded-md px-20 py-2">
        <button>
          Continue
        </button>
      </div>
  )
}

function TextBoxComp(){
  return (
    <div className="bg-blue-700 text-white rounded-md">
        <input type="text" placeholder="Enter you DOB here"></input>
      </div>
  )
}


export default App
