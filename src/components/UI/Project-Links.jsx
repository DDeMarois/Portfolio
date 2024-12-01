export default function ProjectLinks({ name, url, githubUrl, imageUrl }) {
    return (
        <div>
            <a href={url} target="_blank" rel="noreferrer">
                <img src={imageUrl} alt={`${name} project`} />
            </a>
            <div>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
}