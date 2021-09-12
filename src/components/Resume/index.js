import React from "react";

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        Download my resume <a href="../../assets/files/Resume.pdf">here</a>
      </p>
      <div className="front-end-proficiencies">
        <h3>Front end proficiences</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="back-end-proficiencies">
        <h3>Back end proficiences</h3>
        <ul>
          <li>MONGODB</li>
          <li>SQL</li>
          <li>Other stuff</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
