export default function ProjectLinks({ name, githubUrl, imageUrl, deployedUrl }) {
    return (
        <div className="portfolio-container">
            <p className="portfolio-content">{`${name}`}</p>
            <img className="portfolio-image" src={imageUrl} alt={`${name} project`} />
            <div className="portfolio-links">
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a href={deployedUrl} target="_blank" rel="noreferrer">
                    Deployed Application
                </a>
            </div>
        </div>
    );
}