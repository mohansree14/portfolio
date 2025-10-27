import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'MSc Artificial Intelligence',
      institution: 'University of Surrey, UK',
      period: '2025 – 2026 (Expected)',
      icon: '🎓',
      modules: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Machine Learning'],
      research: ['Large Language Models (LLMs)', 'Graph Neural Networks', 'AI Ethics', 'On-Device AI']
    },
    {
      id: 2,
      degree: 'B.Tech Artificial Intelligence & Data Science',
      institution: 'Anna University, India',
      period: '2021 – 2024 | First Class',
      icon: '📚',
      modules: ['Machine Learning', 'Deep Learning', 'Numerical Methods', 'Data Analytics', 'Statistical Analysis'],
      project: 'AI-Powered Virtual Fitting Room (Computer Vision + Generative AI)'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">🎓</span>
          Education
        </h2>
        
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-content">
                <div className="edu-header">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institution">{edu.institution}</p>
                  </div>
                  <span className="edu-period">{edu.period}</span>
                </div>
                
                {edu.modules && (
                  <div className="edu-section">
                    <p className="edu-section-label">Modules:</p>
                    <div className="edu-tags">
                      {edu.modules.map((module, idx) => (
                        <span key={idx} className="edu-tag">{module}</span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.research && (
                  <div className="edu-section">
                    <p className="edu-section-label">Research Focus:</p>
                    <div className="edu-research-text">
                      {edu.research.map((item, idx) => (
                        <span key={idx} className="edu-research-item">{item}</span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.project && (
                  <div className="edu-section">
                    <p className="edu-section-label">Major Project:</p>
                    <p className="edu-project">{edu.project}</p>
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

export default Education;
