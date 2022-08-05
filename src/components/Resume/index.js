import React from "react";

const Resume = () => {
    return(
        <section className="resume" id="resume">
      <a
        href="src/assets"
        rel="noreferrer noopener"
        className="external"
        target={"_blank"}
        download
      >
       Resume
      </a>
      <ul>
      Front End Proficiencies

        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>jQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <ul>
        Back End Proficiencies
        <li>NodeJS</li>
        <li>Express</li>
        <li>mySql, Sequelize</li>
        <li>Mongodb, mongoose</li>
        <li>REST</li>
        <li>Graphql</li>
      </ul>
    </section>

    )
}

export default Resume;