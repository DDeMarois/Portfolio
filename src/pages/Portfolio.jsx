import React from "react";
import { Link } from "react-router-dom";
import Project from "../components/Project";

function Portfolio() { 
    return (
    <>
        <div>
            <h1>Portfolio</h1>
            <p>
                Here are some of the projects I have worked on:
            </p>
            <Project />
        </div>
        <footer>
            <Link to="/">Go back to Home</Link>
        </footer>
    </>
    );
}

export default Portfolio;