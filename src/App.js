import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/page-transitions-2" element={<Home />} />
        <Route path="/page-transitions-2/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
