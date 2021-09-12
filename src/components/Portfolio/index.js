import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "Crypto Tracker",
      img: require("../../assets/images/crypto-tracker-screenshot.png").default,
      link: "https://warm-coast-72937.herokuapp.com/",
    },
    {
      name: "Stock News",
      img: require("../../assets/images/stock-news-screenshot-crop.png")
        .default,
      link: "https://quasse.github.io/group-project/",
    },
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
    {
      name: "Tech Blog",
      img: require("../../assets/images/tech-blog-screenshot.png").default,
      link: "https://blooming-depths-94109.herokuapp.com/",
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
