import About from "./components/About"
import { Main } from "./components/main"
import { Navbar } from "./components/Navbar"
import Skills from "./components/Skill"

// import Ballcanvas from "./components/canvas/balls"


function App() {
  return (
    <>
    <Navbar/>
    <Main />
    <About />
    <Skills/>
    {/* <Ballcanvas/> */}
    </>
  )
}

export default App
