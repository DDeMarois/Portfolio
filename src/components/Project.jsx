import ProjectLinks from './UI/Project-Links';
import Car from '../assets/Media/Car.png';
import Employee from '../assets/Media/Employee.png';
import Read from '../assets/Media/Read.png';
import Travel from '../assets/Media/Travel.png';

export default function Project(){
    return (
        <div className="portfolio-content">
            <ProjectLinks
                name="Employee Tracker"
                githubUrl="https://github.com/DDeMarois/Employee-Tracker"
                videoUrl="https://drive.google.com/file/d/1IiegCDDwVV2sR-orgI6WcXvcDymhsabR/view"
                imageUrl={Employee}
            />
            <ProjectLinks
                name="Vehicle Builder"
                githubUrl="https://github.com/DDeMarois/Vehicle-Builder"
                videoUrl="https://drive.google.com/file/d/1BayAACGRFjZYas60TLGEQthFeQV44w9u/view"
                imageUrl={Car}
            />
            <ProjectLinks
                name="README Generator"
                githubUrl="https://github.com/DDeMarois/README-Generator"
                videoUrl="https://drive.google.com/file/d/1-D7ZL_Cz8004NQZbWmJ6BH59MVJ6eeA8/view"
                imageUrl={Read}
                
            />
            <ProjectLinks
                name="Trip Mosaic"  
                githubUrl="https://github.com/Kristy-H-Thompson/Trip-Mosaic/tree/main"
                videoUrl="https://kristy-h-thompson.github.io/Trip-Mosaic/index.html"
                imageUrl={Travel}
            />
        </div>
    );
}

