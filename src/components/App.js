import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import '../App.css'
import Navbar from './Navbar';
import About from "./About";
import Skills from "./Skills";
import Projects from './Projects';


const App = () => {
 

  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<About />} />
    <Route  path="/skills" element={<Skills />} />
    <Route  path="/projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App