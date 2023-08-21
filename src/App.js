
import './App.css';
import {
  BrowserRouter as Router,
  
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './components/ProjectDisplay';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectDisplay/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/experience" element={<Experience/>} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
