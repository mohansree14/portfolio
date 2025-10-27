import React from 'react';
import './About.css';

const About = () => {
  const experiences = [
    {
      id: 1,
      title: 'Machine Learning Research Intern',
      company: 'Soft4Hire',
      period: 'Apr 2024 - Aug 2024',
      icon: '🤖',
      description: 'Designed recommendation models improving user engagement by 40%. Optimized ML models deployed on AWS Lambda, increasing performance by 30%. Implemented 15+ feature enhancements in collaboration with engineering teams.',
      tech: ['Python', 'AWS', 'TensorFlow', 'Docker', 'FastAPI'],
      appLink: {
        label: 'Rat Gorls App',
        url: 'https://apps.apple.com/us/app/rat-gorls/id6740026474',
        owner: 'Soft4Hire'
      }
    },
    {
      id: 2,
      title: 'Machine Learning Engineer Intern',
      company: 'DLK Technology',
      period: 'Jun 2023 - Jul 2023',
      icon: '⚙️',
      description: 'Built sales forecasting models with ML/statistical methods improving accuracy by 30%. Achieved 95% anomaly detection rate through rigorous model validation. Deployed scalable real-time analytics solutions on AWS.',
      tech: ['Python', 'Scikit-learn', 'AWS', 'Time Series', 'Analytics']
    },
    {
      id: 3,
      title: 'AI Research Intern',
      company: 'ACMEGRADE',
      period: 'May 2023 - Jun 2023',
      icon: '🧠',
      description: 'Developed advanced movie recommendation engine with NLP analysis. Built and deployed Flask API for real-time ML inference, serving 1,000+ users concurrently. Created comprehensive analytics dashboards.',
      tech: ['Python', 'Flask', 'NLP', 'MongoDB', 'Analytics']
    }
  ];

  return (
    <section className="about" id="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">💼</span>
          Experience
        </h2>
        
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="exp-icon">{exp.icon}</div>
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-tech">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
                {exp.appLink && (
                  <div className="exp-link">
                    <div className="app-link-container">
                      <div className="app-link-header">
                        <span className="app-link-label">Project Link</span>
                        <span className="app-owner">(owned by {exp.appLink.owner})</span>
                      </div>
                      <a href={exp.appLink.url} target="_blank" rel="noopener noreferrer" className="app-link">
                        <span className="app-icon">📱</span>
                        <span className="app-name">{exp.appLink.label}</span>
                        <span className="app-external">↗</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;