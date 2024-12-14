
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/banner';
import { Skills } from './components/Skill';
import { Experience } from './components/Experience';
import Contact from './components/Contact';  // ใช้ default import
import Footer from './components/Footer';
import { Certificates } from './components/Certificate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApiShowcase } from './components/APIShowcase';



function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <Skills /> 
       <Experience/>
       <ApiShowcase/>
       <Certificates/>
      
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;