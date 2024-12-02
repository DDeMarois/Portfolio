export default function ProjectLinks({ name, githubUrl, imageUrl }) {
    return (
        <div class="portfolio-container">
            <p class="portfolio-content">{`${name}`}</p>
            <img class="portfolio-image" src={imageUrl} alt={`${name} project`} />
            <div>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
}