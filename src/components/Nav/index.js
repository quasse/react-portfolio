import React, { useState } from "react";

function Nav(props) {
  const { sections, currentSection, setCurrentSection } = props;

  const [navSelected, setNavSelected] = useState(false);

  return (
    <header>
      <h2>
        <a href="/">Sam Morgen</a>
      </h2>
      <nav>
        <ul>
          {sections.map((section) => {
            return (
              <li
                className={`nav-list-item ${
                  currentSection.name === section.name &&
                  navSelected &&
                  "navActive"
                }`}
                key={section.name}
                onClick={() => {
                  setCurrentSection(section);
                  setNavSelected(true);
                }}
              >
                {section.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
