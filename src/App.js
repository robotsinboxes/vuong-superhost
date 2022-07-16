import './App.scss';
// import Shapes from './components/Shapes';
import Intro from './components/Intro';
import About from './components/About';
import Services from './components/Services';
import Button from './components/Button';

function App() {
   return (
      <div className="app">
         {/* <div className="shapes-component">
            <Shapes />
         </div> */}
         <div className="intro-component">
            <Intro />
         </div>
         {/* <div id="curved-corner-bottomleft"></div>
         <div id="curved-corner-bottomright"></div>
         <div id="curved-corner-topleft"></div>
         <div id="curved-corner-topright"></div> */}
         
         <div className="about-component">
            <About />
         </div>
         <div className="services-component">
            <Services />
         </div>
         <div className="button-component">
            <Button />
         </div>
         <div className="space-holder"></div>
      </div>
   );
}

export default App;
