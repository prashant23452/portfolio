
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from './Page/About';
import Skills from './Page/Skills';
import Projects from './Page/Projects';
import Achievements from './Page/Achievements';
import BackgroundPattern from "./BackgroundPattern";
function App() {
  return (
    <div>
      <BackgroundPattern />
      <div className="mt-4 mx-40 bg-gray">
        
        <Navbar/>
        <About/>
        
      </div>
      <Skills/>
        <Projects/>
        <Achievements/>
        <Footer/>
    </div>
    
  );
}

export default App;
