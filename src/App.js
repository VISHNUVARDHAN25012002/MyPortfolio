import React from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/footer";
import { SpeedInsights } from '@vercel/speed-insights/react';  // Import SpeedInsights
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Integrate SpeedInsights for performance monitoring */}
      <SpeedInsights />

      <HashRouter>
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
