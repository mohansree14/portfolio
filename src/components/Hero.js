import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const roles = [
    'MSc AI Student & Researcher',
    'AI Developer',
    'Machine Learning Engineer',
    'Data Scientist',
    'Data Analyst',
    'Prompt Engineer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 70); // Type speed (increased from 50)
      } else {
        // Wait before starting to delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Display duration
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40); // Delete speed (increased from 30)
      } else {
        // Move to next role
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Sidebar */}
        <div className="hero-sidebar">
          <div className="profile-card">
            <div className="profile-image">
              <img src="/IMG_0241.JPG" alt="Profile" />
            </div>
            
            <div className="status-badge">
              <span className="status-dot"></span>
              Available for work
            </div>

            <h2 className="profile-name">Mohan Sree Vijayakumar</h2>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/mohan-sreev" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="https://github.com/mohansree14" title="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a href="mailto:mohansreevijayakumare@gmail.com" title="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>

            <div className="sidebar-buttons">
              <a href="https://drive.google.com/file/d/1TLhVIua2nXwwp4RhJ2g6JgHBoOOJ_t91/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-download">📥 Download CV</a>
              <a href="#contact" className="btn-contact">✈️ Contact Me</a>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-content">
          <div className="greeting">👋 Say Hello</div>
          
          <h1 className="hero-title">
            I'm <span className="highlight-word">Mohan Sree Vijayakumar</span>,
            <br />
            <div className="role-animated">
              <span className="animated-role">{displayedText}</span>
              <span className="typing-cursor">|</span>
            </div>
            <br />
            Based in Guildford, UK.
          </h1>

          <p className="hero-description">
            Modern AI/ML engineer specializing in computer vision, NLP, and full-stack development. Building intelligent systems that solve real-world problems through cutting-edge machine learning and deep learning techniques.
          </p>

          {/* Stats */}
          <div className="stats-container">
            <div className="stat">
              <div className="stat-number">8+</div>
              <div className="stat-label">ML/AI Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number">24+</div>
              <div className="stat-label">Technical Skills</div>
            </div>
            <div className="stat">
              <div className="stat-number">3</div>
              <div className="stat-label">Internships</div>
            </div>
            <div className="stat">
              <div className="stat-number">97%+</div>
              <div className="stat-label">Model Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;