import './Styles.scss';
import React from 'react';
import ProfilePic from '../images/profile-pic.png';

const About = () => {   
   return (
      <div id="about" className="about-container">
         <div className="decorative-container"></div>
         <div className="about-me-text">
            <h1>About Me</h1>
            <hr></hr>
            <p>My name is Teddy, and I’ve been using Airbnb as a traveler since 2012. In 2014, I began Airbnb-ing my apartment room in Brooklyn when I went traveling. In 2017, my wife and I took the plunge and purchased a property in the Hudson Valley in New York, with the intention of Airbnb-ing it out a couple of weekends a month in order to subsidize our mortgage. </p>
            <br></br>
            <p>Just one year after that purchase, we were awarded ‘Superhost’ status by Airbnb, and booking demand for our house increasingly grew. In 2021, Airbnb asked me to become a Superhost Ambassador (even featuring me in their ads), offering me a chance to consult and help people become new hosts at no cost to them. </p>
         </div>
         <div className="bathroom-img"> 
            <img src={ProfilePic} alt="bathroom" />
         </div>
      </div>
   )
};

export default About;