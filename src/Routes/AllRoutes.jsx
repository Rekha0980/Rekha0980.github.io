import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/skills" element={<Skills/>}/>
        {/* <Route path="*" element={<NotFoundPage/>}/> */}
      </Routes>
    );
  }

export default AllRoutes