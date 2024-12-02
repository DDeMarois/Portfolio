import React from 'react';
import ProjectLinks from './UI/Project-Links';
import Car from '../assets/Media/Car.png';
import Employee from '../assets/Media/Employee.png';
import Read from '../assets/Media/Read.png';
import Travel from '../assets/Media/Travel.png';

export default function Project(){
    return (
        <div class="portfolio-content">
            <ProjectLinks
                name="Employee Tracker"
                githubUrl="https://github.com/DDeMarois/Employee-Tracker"
                imageUrl={Employee}
            />
            <ProjectLinks
                name="Vehicle Builder"
                githubUrl="https://github.com/DDeMarois/Vehicle-Builder"
                imageUrl={Car}
            />
            <ProjectLinks
                name="README Generator"
                githubUrl="https://github.com/DDeMarois/README-Generator"
                imageUrl={Read}
                
            />
            <ProjectLinks
                name="Trip Mosaic"  
                githubUrl="https://github.com/Kristy-H-Thompson/Trip-Mosaic/tree/main"
                imageUrl={Travel}
            />
        </div>
    );
}

