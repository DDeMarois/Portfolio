import React from "react";
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <p>
                Hi, I'm Drew DeMarois! After 6 working in the countertop industry, I'm making an exciting career change to coding. My passion for problem-solving, attention to detail, and love for creating tangible results have driven me to pursue a new path in tech.  
                Throughout my career, I've developed strong skills in leadership roles, project management, communication, and teamwork, which I'm now applying to the world of programming. I've been diving into JavaScript, using Web API's, Node JS, SQL, and React. 
                This transition is about more than learning a new skill, it's about combining my hands-on experience with a forward-thinking approach to technology. My goal is to create solutions that are not only functional but impactful.  
                When I'm not coding, you'll find me playing golf, working out, and hanging out with my wife and fur babbies.  
                I believe in continuous growth, embracing challenges, and turning bold ideas into reality. I'm excited to see where this journey takes me and the opportunities that lie ahead.
            </p>
    <footer>
        <Link to="/">Go back to Home</Link>
    </footer>
        </div>
    );
}
