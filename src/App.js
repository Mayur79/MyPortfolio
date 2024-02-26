
import './App.css';
import Navbar from './Components/Navbar';
import AboutSection from './Pages/AboutSection';
import Contactus from './Pages/Contactus';
import FooterSection from './Pages/FooterSection';
import HeroSection from './Pages/HeroSection';
import ProjectSection from './Pages/ProjectSection';
import SkillSection from './Pages/SkillSection';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div id="aboutSection">
        <AboutSection />
      </div>
      <div id="skillSection">
        <SkillSection />
      </div>
      <div id='projectSection'>
        <ProjectSection />
      </div>
      <div id='contactSection'>
        <Contactus />
      </div>
      <FooterSection />
    </>

  );
}

export default App;
