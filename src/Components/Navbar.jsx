import {  useState } from "react";
import { Link } from "react-scroll";
import  "./Navbar.css";
import{Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x';
import myresume from "../file/Rekha_Yadav_Resume.pdf"




const Navbar=()=> {

  const [toggle,setToggle]=useState(false)
  const[click,setClick]=useState(false)
  const closeMenu=()=>setClick(false)
const handleToggle=()=>{
setToggle(!toggle)
}
const handleResume=()=>{
  window.open("https://drive.google.com/file/d/16x1HAz0WviURA8xIgUz_zPMlzzbMXPSl/view?usp=sharing","_blank","noopener","noreferrer")
}

  return (
   
    <div className="navbar">
      <h2 className="logo"><Link to="home"spy={true} duration={500} offset={-100} onClick={closeMenu} smooth={true}>Rekha</Link></h2>
      <ul className={toggle?"link_mobile":"links"} onClick={()=>setToggle(false)}>
         <li className="about"><Link to="home"spy={true} duration={500} offset={-100} onClick={closeMenu} smooth={true}>HOME</Link></li>
     <li className="about"><Link to="about"spy={true} duration={500} offset={-100} onClick={closeMenu} smooth={true}>ABOUT</Link></li>
     <li className="projectt"><Link to="project" spy={true} duration={500} offset={-100} onClick={closeMenu} smooth={true}>PROJECT</Link></li>
     {/* <li className="skill" ><a href="#skill">SKILLS</a></li> */}
     <li className="skill"><Link to="skill" spy={true} duration={500} offset={-100} onClick={closeMenu} smooth={true}>SKILLS</Link></li>
     <li className="contact"><Link to="contact" spy={true} duration={500} offset={-100} onClick={closeMenu} smooth={true}>CONTACT</Link></li>
    <li className="contact" onclick={()=>handleResume}> <a href={myresume} onClick={handleResume} download target="_blank" rel="noopener noreferrer">RESUME</a></li>
      </ul>
    <button className="mobile_icon" onClick={handleToggle}>{toggle ?<Icon icon={x} size={20}/>:<Icon icon={menu} size={20}/>}</button>
      </div>
  );
}
export default Navbar;

