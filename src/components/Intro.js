import './Styles.scss';
//import { TbBrandAirbnb } from 'react-icons/tb'
import AirbnbPng from '../images/airbnb.png';

const Intro = () => {
   return (
      <div className="intro-container">
         <div className='circle'></div>
         <div className="intro">
            <p>Learn tips</p>
            <p>from an official</p> 
            {/* <p className='airbnb'>
               <span className='airbnb-icon'><TbBrandAirbnb/></span>
               airbnb
            </p> */}
         </div>
         <div className="intro-airbnb">
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