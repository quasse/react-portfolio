import React, { useState } from "react";

function Nav(props) {
  const { sections, currentSection, setCurrentSection } = props;

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
                key={section.name}
                onClick={() => {
                  setCurrentSection(section);
                  console.log(section);
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
