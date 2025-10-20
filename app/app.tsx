import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Projects from './routes/projects';
import Experience from './routes/experience';
import About from './routes/about';
import Header from "~/Headerr";


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;