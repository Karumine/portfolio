import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/banner';
import { Skills } from './components/Skill';
import { Experience } from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Certificates } from './components/Certificate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApiShowcase } from './components/APIShowcase';
import WebSkills from './pages/webskills'; // นำเข้า WebSkills
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ใช้ Router

function App() {
  return (
    <Router>
      <Routes>
        {/* หน้าแรก */}
        <Route
          path="/"
          element={
            <div className="App">
              <NavBar />
              <Banner />
              <Skills />
              <Experience />
              <ApiShowcase />
              <Certificates />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* หน้าใหม่ */}
        <Route path="/WebSkills" element={<WebSkills />} 
        />
        {/* หน้าใหม่ */}
        <Route path="/WebSkills" element={<WebSkills />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
