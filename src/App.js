import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [sections] = useState([
    { name: "About", htmlTag: <About></About> },
    { name: "Portfolio", htmlTag: <Portfolio></Portfolio> },
    { name: "Contact", htmlTag: <Contact></Contact> },
    { name: "Resume", htmlTag: <Resume></Resume> },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Nav sections={sections} setCurrentSection={setCurrentSection}></Nav>
      {currentSection.htmlTag}
    </div>
  );
}

export default App;
