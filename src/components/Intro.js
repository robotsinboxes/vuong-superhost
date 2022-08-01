import './Styles.scss';
import LivingRoom from '../images/living_room.jpg';
import AirbnbPng from '../images/airbnb.png';

const Intro = () => {
   return (
      <div className="intro-container">
         <div className="intro-bg-img">
            <img src={LivingRoom} alt='airbnb'></img>
         </div>
         <div className='circle'></div>
         <div className="intro">
            <p>Learn tips</p>
            <p>from an official</p> 
         </div>
         <div className="intro-airbnb">
            <img className='airbnb-png' src={AirbnbPng} alt='airbnb'></img>
         </div>
         <div className="intro-title">
            <h1 className='super'>SUPERHOST</h1>
            <h1 className='ambass'>AMBASSADOR</h1>
         </div>
         
         {/* ARROW test - @Jakub Honisek, Codepen*/}
         <div class="arrow-down">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
         </div>

      </div>
   )
}

export default Intro;