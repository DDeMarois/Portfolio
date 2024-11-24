import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>
                My name is Jane Doe, and I am a full stack web developer with a passion for creating beautiful and functional websites. 
                I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. 
                I am always looking to learn new technologies and improve my skills. 
                In my free time, I enjoy reading, hiking, and spending time with my family.
            </p>
            <footer>
                <p>
                    Check out my <Link to="/portfolio">portfolio</Link>, <Link to="/resume">resume</Link>, <Link to="/about">about</Link>, or <Link to="/contact">contact</Link>.
                </p>
            </footer>
        </div>
    );
}