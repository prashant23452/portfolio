
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from './Page/About';
import Skills from './Page/Skills';
import Projects from './Page/Projects';
import Achievements from './Page/Achievements';
import BackgroundPattern from "./BackgroundPattern";
import Mid from "./Page/Mid";
import Experience from "./Page/Experience";
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
      <Mid/>
      <Experience/>
      <Achievements/>
      <Footer/>
    </div>
    
  );
}

export default App;
