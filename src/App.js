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
