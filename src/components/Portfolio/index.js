import React, { useState } from "react";

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'Run Buddy',
            type: 'Webpage',
            appLink: 'https://ortaylo.github.io/run-buddy/',
            github: 'https://github.com/Ortaylo/run-buddy'
        },
        {
            name: 'Code quiz',
            type: 'Webpage',
            appLink: 'https://ortaylo.github.io/code-Quiz/',
            github: 'https://github.com/Ortaylo/code-Quiz'
        },
        {
            name: 'Note taker',
            type: 'NodeJS App',
            appLink: 'https://calm-atoll-85512.herokuapp.com/',
            github: 'https://github.com/Ortaylo/Note-Taker'
        },
        {
            name: 'Day Planner',
            type: 'Webpage',
            appLink: 'https://ortaylo.github.io/Day-Planner/',
            github: 'https://github.com/Ortaylo/Day-Planner'
        },
        {
            name: 'Tech Blog',
            type: 'NodeJS App',
            appLink: 'https://ancient-beyond-24111.herokuapp.com/',
            github: 'https://github.com/Ortaylo/Tech-Blog'
        },
        {
            name: 'R.E.L.A.X',
            type: 'Webpage',
            appLink: 'https://madstoddard.github.io/ease-your-stress/',
            github: 'https://github.com/MadStoddard/ease-your-stress'
        }
    ])
    return(
        <section className="portfolio" id="portfolio">
        {projects.map((project,i) => (
        <image>
        <img
        className="project-img"
        src={require(`../../assets/images/${i}.png`)}
        alt={project.name}
        onClick={() => console.log(project.name)}
        key={project.name}
        />
        <h4 className="project-text">
        <a href={project.appLink}>
        {project.name}    
        </a>
        <a href={project.github}>
        <img 
        src={
        require('../../assets/images/Github.png')}
        alt="Github Logo Repository Link"
        key={project.github}
        />
        </a>
        <br/> 
        </h4>
        <p>{project.type}</p>
        </image>
        
       
        
        ))}
        
        </section>
    )
};

export default Portfolio;