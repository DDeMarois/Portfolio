export default function Nav({ links }) {
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </nav>
    );
}