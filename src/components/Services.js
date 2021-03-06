import './Styles.scss';
import Bedroom from '../images/bedroom.jpg';
import Bathroom from '../images/bathroom.jpg';

const Services = () => {   
   return (
      <div id="services" className="services-container">
         <div className="decorative-container-services"></div>
         <div className="services-text-pp1">
            <h1>What Can I Help You With?</h1>
            <hr></hr>
            <p>Transitioning from Airbnb travelers to hosts was easy for us because we were such frequent travelers, and learned a lot from the places we stayed. (It also helped that we had a genuine love and knack for decorating and hosting). But for many people - the thought of inviting strangers into your house can be nerve-wracking. I can help alleviate some of those worries, and walk you through booking, vetting, security, insurance, payouts, and much more.</p>
        
         </div>
         <div className="bedroom-img"> 
            <img src={Bedroom} alt="bedroom" />
         </div>
         <div className="services-text-pp2">
            <p className='link'>To get started, just click on 
               <a href='https://www.airbnb.com/askasuperhost?from=mentee_landing_page&ambassadorUserId=14564141&r=teddyvuong&s=9' target='_blank' rel='noreferrer' className='link'> this link</a>
            , and Airbnb will connect you with me. Send me a quick introduction and i’ll get back to you the same day. </p>
            <br></br>
            <p>As a Superhost, I can also help give you best practices for furnishing and designing the experience. I can help you ‘sell’ your space with guidance around photography, descriptions, and amenities. Finally, I’ll help you get the place ready to welcome your first guests.</p>
         </div>
         <div className="button-container">
            <a href='https://www.airbnb.com/askasuperhost?from=mentee_landing_page&ambassadorUserId=14564141&r=teddyvuong&s=9' target='_blank' rel='noreferrer' className='btn'>
               Get started!
            </a>
         </div>
         <div className="bathroom-img"> 
            <img src={Bathroom} alt="bathroom" />
         </div>
      </div>
   )
};

export default Services;