import { BrowserRouter,Route, Routes  } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Booknow from "./Pages/Booknow";
import Navbar from "./Components/Navbar";

function App() {


  return (
    <div className="">
        <BrowserRouter>
        <Navbar/>
          <div className=" relative top-[110px]">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/booknow" element={<Booknow/>}/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  )
}

export default App
