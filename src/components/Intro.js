import './Styles.scss';
// import { FaAirbnb } from 'react-icons/fa';
import ProfilePic from '../images/profile-pic.png';
import AirbnbPng from '../images/airbnb.png';

const Intro = () => {
   return (
      <div className="intro-container">
         <div className="pic-container">
            <img src={ProfilePic} className="profile-pic" alt="profile"/>
         </div>
         <div className="intro-name">
            <h2>I'm</h2>
            <h1>Teddy,</h1>
         </div>
         <div className="intro-airbnb">
            {/* <h1><FaAirbnb/> Airbnb</h1> */}
            <img className='airbnb-png' src={AirbnbPng} alt='airbnb'></img>
         </div>
         <div className="intro-super">
            <h1>Superhost</h1>
         </div>
         <div className="intro-ambass">
            <h1>Ambassador</h1>
         </div>
      </div>
   )
}

export default Intro;