export default function Nav({ links }) {
    return (
    <div>
        <nav>
            <header className="nav-header">Drew DeMarois</header>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </nav>
    </div>
);
}