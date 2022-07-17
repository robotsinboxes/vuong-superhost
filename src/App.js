import './App.scss';
import Intro from './components/Intro';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
   return (
      <div className="app">
         <div className="intro-component">
            <Intro />
         </div>
         <div className="about-component">
            <About />
         </div>
         <div className="services-component">
            <Services />
         </div>
         <div className="footer">
            <Footer />
         </div>
      </div>
   );
}

export default App;
