import React from "react";
import './intro.css';
import bg from '../../assets/vishnu.jpg';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro =()=>{
    return(
        <section id="intro">
            <div className="introContent">
               
                <span className="hello">Hello,</span>

                <span className="introText">I'm<span className="introname"> Vishnu</span><br/> FullStack Developer</span>

                <p className="intropara">I am a  FullStackDeveloper,I build things using Java and gaining <br/> knowldge in Recent Technology</p>

               <Link><button className="btn"><img src={btnImg}alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
            
            </div>
         
            <img src={bg} alt="profile" className="bg"/>
        
        </section>
      
    )
}

export default Intro
