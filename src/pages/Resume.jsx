import React from 'react';

export default function Resume() {
  return (
    <React.Fragment>
      <div className='resume-container'>
        <header className='resume-header'>Resume</header>
        <p className='resume-content'>
          Please click the link below to view my resume:
        </p>
        <a
          className='resume-link'
          href="/Resume.pdf"
          download="Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </React.Fragment>
  );
}


