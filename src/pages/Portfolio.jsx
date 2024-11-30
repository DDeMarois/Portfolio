import React from "react";
import { Link } from "react-router-dom";

function Portfolio() { 
    return (
    <>
        <div>
            <h1>Portfolio</h1>
            <p>
                Here are some of the projects I have worked on:
            </p>
            <ul>
                <li>
                    <a href="https://github.com/DDeMarois/Employee-Tracker"></a>
                    <a href="https://github.com/DDeMarois/Vehicle-Builder"></a>
                    <a href="https://github.com/DDeMarois/README-Generator"></a>
                    <a href="https://github.com/Kristy-H-Thompson/Trip-Mosaic"></a>
                </li>
            </ul>
        </div>
        <footer>
            <Link to="/">Go back to Home</Link>
        </footer>
    </>
    );
}

export default Portfolio;