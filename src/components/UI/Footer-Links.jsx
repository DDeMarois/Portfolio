import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
    return (
        <footer>
            <ul>
                <li><Link to="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
                <li><Link to="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
            </ul>
        </footer>
    );
};

export default FooterLinks;