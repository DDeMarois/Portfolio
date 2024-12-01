export default function FooterLinks() {
    return (
        <footer>
            <ul>
                    <a href="https://github.com/DDeMarois" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                            alt="GitHub" 
                            style={{
                                width: '100px',
                                height: '100px',
                                padding: '20px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} 
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/drew-demarois-2260a8286/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" 
                            alt="LinkedIn"
                            style={{
                                width: '100px',
                                height: '100px',
                                padding: '20px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        />
                    </a>
            </ul>
        </footer>
    );
}