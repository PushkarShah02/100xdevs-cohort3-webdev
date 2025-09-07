import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
function App() {


  return (
    <BrowserRouter>

      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />} >

          {/* child routes */}
          <Route path="/live/courses/class11" element={<Class11program />} />
          <Route path="/live/courses/class12" element={<Class12program />} />
          <Route index element={<LandingPage />} />
          <Route path="*" element={<Pagenotfound />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}
function Layout() {
  return (<div>
    <nav>
      <div style={{ background: "#f5f5f5", padding: "10px", borderBottom: "1px solid #ddd", display: "flex", alignItems: "center" }}>
        <span style={{ fontWeight: "bold", fontSize: "18px", marginRight: "20px" }}>My Website</span>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/live/courses/class11" style={{ marginRight: "15px" }}>Class 11</Link>
        <Link to="/live/courses/class12">Class 12</Link>
      </div>
    </nav>

    {/* Dynamic child pages will render here */}
    <div style={{ height: "85vh" }}>
      <Outlet />
    </div>
    {/* Dynamic child pages will render here */}


    <footer>
      <div style={{ background: "#f5f5f5", padding: "10px", borderBottom: "1px solid #ddd", display: "flex", alignItems: "center" }}>
        <span style={{ fontWeight: "bold", fontSize: "18px", marginRight: "20px" }}>Footer</span>
      </div>
    </footer>
  </div>);
}


function Class11program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/")
  }
  return <div>
    <h2>Class 11 Course Content</h2>
    <ul>
      <li>Mathematics</li>
      <li>Physics</li>
      <li>Chemistry</li>
      <li>Biology</li>
      <li>English</li>
      <li>Computer Science</li>
    </ul>

    <button onClick={redirectUser}>Click To go back</button>
  </div>

}
function Class12program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/")
  }
  return <div>
    <h2>Class 12 Course Content</h2>
    <ul>
      <li>Mathematics</li>
      <li>Physics</li>
      <li>Chemistry</li>
      <li>Biology</li>
      <li>English</li>
      <li>Computer Science</li>
    </ul>
    <button onClick={redirectUser}>Click To go back</button>
  </div>

}
function LandingPage() {
  return <div>
    <strong>My landing Page</strong>
  </div>
}

function Pagenotfound() {
  return <div>
    Sorry Page Not Found
  </div>
}

export default App
