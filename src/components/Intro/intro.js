import React from "react";
import './intro.css';
import bg from '../../assets/vishnu.jpg';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro =()=>{
    return(
    <div class="container">
        <section id="intro">
            <div class="row justify-content-center">
            <div class="col-lg-4 col-12">
            <div className="introContent">
               
                <span className="hello">Hello,</span>

                <span className="introText">I'm<span className="introname"> Vishnu</span><br/> FullStack Developer</span>

                <p className="intropara">I am a  FullStackDeveloper,I build things using Java and gaining <br/> knowldge in Recent Technology</p>

               <Link><button className="btn"><img src={btnImg}alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
            
            </div>
            </div>
            <div class="col-md-8 col-12">
            <img src={bg} alt="profile" className="bg"/>
            </div>
         </div>
        </section>
        </div>
      
    )
}

export default Intro
