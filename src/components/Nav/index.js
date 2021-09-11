import React from "react";

function Nav(props) {
  const { sections, setCurrentSection } = props;

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
                className="nav-list-item"
                key={section.name}
                onClick={() => {
                  setCurrentSection(section);
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
