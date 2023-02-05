import "./Home.css"
import { Link, useNavigate } from "react-router-dom";
import Slides from "../Components/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Calender } from "../Components/Githubcalender";
import Stat from "../Components/Stats";
import Tools from "../Components/Tools";
import Contact from "../Components/Connect";
import Projects from "../Components/Project_section";
import Typewriter from "typewriter-effect"
import myresume from "../file/Rekha_Yadav_Resume.pdf"


function Home() {
    const handleResume=()=>{
        window.open("https://drive.google.com/file/d/16x1HAz0WviURA8xIgUz_zPMlzzbMXPSl/view?usp=sharing","_blank","noopener","noreferrer")
      }

    return (
        <div>
            <div className="main" id="home">
                <div className="right_box">
                    <h1>REKHA YADAV</h1>
                    <p><Typewriter options={{autoStart:true,
                    loop:true,
                    delay:100,
                    strings:[
                        "I am a Full-Stack Web Developer",
                      
                    ]}}/></p>
                  <a href={myresume} onClick={handleResume} download target="_blank" rel="noopener noreferrer"><button className="btn1"onclick={()=>handleResume}>Resume</button></a>
                </div>  
                <div className="left_box">
                    <img src="https://avatars.githubusercontent.com/u/101573056?v=4" alt="pro" />
                </div>
            </div>
            <div>
                <div className="about_me" id="about">
                    <div className="right_about">
                        <h1>ABOUT ME</h1>
                        <p>Aspiring Front-end development professional, with expertise in HTML,
                            CSS, Javascript, and ReactJs. Curious to learn about emerging web
                            technologies. Looking forward to working in a fast-paced environment and
                            playing a key role in a company's growth.Strongly interested in obtaining a
                            Software Developer position to work on enhancing the product experience.</p>
                    </div>
                    <div className="left_about">
                        <img src="https://jaynikatandel.vercel.app/static/media/purpleTheme-girl.56852c94.svg" />
                    </div>
                </div>
            </div>

            {/* project section */}
            <Projects/>
            <Calender />
            <Stat />
            {/* <div id="skill">
           
            </div> */}
            <Slides />
            <Tools/>
            <Contact/>
        </div>

    )
}

export default Home