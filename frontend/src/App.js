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
import WebSkills2 from './pages/webskills2'; // นำเข้า WebSkills
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ใช้ Router
import { Link } from 'react-router-dom';

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
              {/* ลิงก์ไปยังหน้า HTML */}
              <Link to="/html-page">Go to HTML Page</Link>
            </div>
          }
        />

        {/* หน้า WebSkills */
        <Route path="/WebSkills" element={<WebSkills />} />}

        {/* หน้า WebSkills2 */}
        <Route path="/WebSkills2" element={<WebSkills2 />} />

        {/* หน้า HTML ใหม่ */}
        <Route
          path="/html-page"
          
        />
      </Routes>
    </Router>
  );
}

export default App;
