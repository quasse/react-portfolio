import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "Note Taker",
      img: require("../../assets/images/note-taker-screenshot.png").default,
      link: "https://shielded-waters-60571.herokuapp.com/",
    },
    {
      name: "Workday Scheduler",
      img: require("../../assets/images/scheduler-screenshot.png").default,
      link: "https://quasse.github.io/scheduler/",
    },
    {
      name: "Weather Forecaster",
      img: require("../../assets/images/forecaster_screenshot.png").default,
      link: "https://quasse.github.io/forecaster/",
    },
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div className="project" key={project.name}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt="Link to developed site" />
              </a>
              <h3>{project.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
