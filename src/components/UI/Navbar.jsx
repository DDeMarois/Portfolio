export default function Nav({ links }) {
    return (
        <div>
            <nav>
                <h2>Drew DeMarois</h2>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}