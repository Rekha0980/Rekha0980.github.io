import "./contact.css"
import emailjs from '@emailjs/browser'
import { useRef } from "react";
import {atSign} from 'react-icons-kit/feather/atSign'
import Icon from "react-icons-kit";
import {location} from 'react-icons-kit/icomoon/location'
import {ImGithub } from 'react-icons/im'
import {GrLinkedin } from 'react-icons/gr'
import {GrMail } from 'react-icons/gr'
import {MdLocationOn } from 'react-icons/md'
 import {MdPhone} from"react-icons/md"





const Contact=()=>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log("klop")
  
      emailjs.sendForm('service_mvegvpg', 'template_uv63695', form.current, 'DTPZl-UuLu5O2oomg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div>
            <h1 className="contact_heading" id="contact">CONTACTS</h1>
            <div className="container">
                <div className="cont_box1">
                    <h1>Get in Touch</h1>
                    <h1>Contact me</h1>
                    <h3> <MdPhone color="mediumpurple"/><span>{"  "}</span>9260947380</h3>
                   <h3> <GrMail color="mediumpurple"/><span>{"  "}</span>rekha.ee026@gmail.com</h3>
                    <h3><MdLocationOn color="mediumpurple" /><span>{"  "}</span>Prayagraj,U.P</h3>
                    <div style={{display:"flex"}}>
                   <a href="https://www.linkedin.com/in/rekha-yadav-66311b1b2/" target="_blank"><div><GrLinkedin size="30px" color="mediumpurple"  /></div></a>  
                 <a href="https://github.com/Rekha0980" target="_blank"><div style={{marginRight:"100px" }}><ImGithub size="30px" color="mediumpurple" /></div></a> 
                    </div>
               
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label> Name</label><br/>
                        <input type="text" name="to_name" placeholder="Name" className="user"/><br/>
                        <label> Email</label><br/>
                        <input type="text" name="from_name" placeholder="Email" className="user"/><br/>
                        <label> Message</label><br/>
                        <textarea type="text" name="message" placeholder="Message" className="user"/><br></br>
                        <input type="submit" className="contact_button"/>
                        
                     
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact