export default function FooterLinks() {
    return (
        <footer className="footer-links" style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f1f1f1', padding: '10px 0' }}>
            <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', listStyleType: 'none', padding: 0 }}>
                <li>
                    <a href="https://github.com/DDeMarois" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                            alt="GitHub" 
                            style={{
                                width: '50px',
                                height: '50px',
                                padding: '10px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} 
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/drew-demarois-2260a8286/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" 
                            alt="LinkedIn"
                            style={{
                                width: '50px',
                                height: '50px',
                                padding: '10px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        />
                    </a>
                </li>
            </ul>
        </footer>
    );
}