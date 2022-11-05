import { Route, Routes } from "react-router-dom"
import { Navbar } from "./component/molecules"
import { Home } from "./pages"

function App() {
  return (
    <div >
      <Navbar />
      <div className="pt-16 px-6">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
