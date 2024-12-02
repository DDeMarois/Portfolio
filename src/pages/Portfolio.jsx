import React from "react";
import Project from "../components/Project";

export default function Portfolio() { 
    return (
        <React.Fragment>
        <div className="portfolio-container">
            <header className="portfolio-header">Portfolio</header>
            <p className="portfolio-content">
                Here are some of the projects I've worked on. Click on the links to view the deployed applications and the GitHub repositories.
            </p>
            <Project />
        </div>
        </React.Fragment>
    );
}
