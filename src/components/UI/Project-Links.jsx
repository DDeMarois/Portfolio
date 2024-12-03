export default function ProjectLinks({ name, githubUrl, imageUrl, videoUrl }) {
    return (
        <div className="portfolio-container">
            <p className="portfolio-content">{`${name}`}</p>
            <img className="portfolio-image" src={imageUrl} alt={`${name} project`} />
            <div className="portfolio-links">
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a href={videoUrl} target="_blank" rel="noreferrer">
                    Video Demo/Deployed Website
                </a>
            </div>
        </div>
    );
}