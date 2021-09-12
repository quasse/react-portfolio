import React from "react";
import resume from "../../assets/files/Resume.pdf";

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        Download my resume{" "}
        <a href={resume} download>
          here
        </a>
      </p>
      <div className="proficiencies">
        <h3>Front end proficiences</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="proficiencies">
        <h3>Back end proficiences</h3>
        <ul>
          <li>MONGODB</li>
          <li>SQL</li>
          <li>Express.js</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
