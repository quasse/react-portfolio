import React from "react";
import headshot from "../../assets/images/headshot.jpg";

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <article className="bio">
        <img src={headshot} alt="headshot" />
        <p>
          {" "}
          Hello! Thanks for taking the time to read this. I am a newly-minted
          web developer hoping to show off my work to you. Here's a little bit
          about me: I'm a former reporter who is looking to switch careers. My
          interest in programming began in college when I took several computer
          science courses. Then I decided to give reporting a go, and I loved
          it! <br />
          <br />
          Now, I'm trying out another passion of mine. Feel free to look around
          and see a sampling of my work. I hope you like it!
        </p>
      </article>
    </section>
  );
}

export default About;
