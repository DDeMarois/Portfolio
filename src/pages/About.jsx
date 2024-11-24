import React from "react";
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <p>
                I am a full stack web developer with a passion for creating beautiful and functional websites. 
                I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. 
                I am always looking to learn new technologies and improve my skills. 
                In my free time, I enjoy reading, hiking, and spending time with my family.
            </p>
    <footer>
        <Link to="/">Go back to Home</Link>
    </footer>
        </div>
    );
}
