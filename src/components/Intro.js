import './Styles.scss';
import { FaAirbnb } from 'react-icons/fa';
import ProfilePic from '../images/profile-pic.png';

const Intro = () => {
   return (
      <div className="intro-container">
         <div className="pic-container">
            <img src={ProfilePic} width='500' className="profile-pic" alt="profile"/>
         </div>
         <div className="intro-text-container">
            <div className="intro-name">
               <h1>I'm Teddy</h1>
            </div>
            <div className="intro-airbnb">
               <h2><FaAirbnb/> Airbnb</h2>
            </div>
            <div className="intro-super">
               <h1>Superhost</h1>
            </div>
            <div className="intro-embass">
               <h1>Ambassador</h1>
            </div>
         </div>
      </div>
   )
}

export default Intro;