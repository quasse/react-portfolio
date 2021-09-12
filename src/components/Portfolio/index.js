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
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div className="project" key={project.name}>
              <img src={project.img} />
              <h3>{project.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
