import './App.scss';
import Shapes from './components/Shapes';
import Intro from './components/Intro';

function App() {
   return (
      <div className="app">
         <div className="shapes-component">
            <Shapes />
         </div>
         <div className="intro-component">
            <Intro />
         </div>
      </div>
   );
}

export default App;
