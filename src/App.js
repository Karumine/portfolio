import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skill';
import { Certificates } from './components/Certificate';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <Skills />
       <Certificates />
    </div>
  );
}

export default App;