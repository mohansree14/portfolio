import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      role: 'Lead AI Engineer',
      company: 'Cledion',
      companyLink: 'https://www.cledion.com/',
      period: 'Oct 2024 - Present',
      icon: '📊',
      summary: 'Political & Economic Intelligence Platform - Architecting distributed data pipelines and NLP systems',
      achievements: [
        'Architected distributed data pipeline processing 5TB+ of global news/text data using Apache Spark',
        'Developed production NLP models for entity recognition and sentiment analysis with 94% accuracy',
        'Created real-time geopolitical risk dashboard with Plotly Dash for enterprise clients',
        'Established MLOps pipeline on AWS SageMaker for automated model deployment'
      ],
      technologies: ['Apache Spark', 'Hugging Face Transformers', 'spaCy', 'AWS SageMaker', 'Airflow', 'Plotly Dash', 'PostgreSQL']
    },
    {
      id: 2,
      role: 'AI Lead & Cofounder',
      company: 'BSure',
      companyLink: undefined,
      period: 'Jan 2024 - Present',
      icon: '🚀',
      summary: 'AI-Powered FashionTech Retail Platform - Building innovative multi-modal recommendation systems',
      achievements: [
        'Built multi-modal recommendation engine using CLIP + ResNet for fashion product matching',
        'Engineered 3D garment visualization system with Three.js, reducing return intent by 40%',
        'Developed microservices architecture with FastAPI, achieving <100ms inference latency',
        'Implemented A/B testing framework that increased user engagement by 22%'
      ],
      technologies: ['PyTorch', 'OpenCV', 'CLIP', 'Three.js', 'FastAPI', 'Docker', 'AWS Lambda', 'S3']
    },
    {
      id: 3,
      role: 'Machine Learning Engineer Intern',
      company: 'Soft4Hire',
      companyLink: 'https://in.linkedin.com/company/soft4hire',
      period: 'Mar 2024 - Nov 2024 | Chennai, India',
      icon: '🤖',
      summary: 'Developed production recommendation systems for social career platform',
      achievements: [
        'Architected hybrid recommendation engine combining collaborative filtering (LightFM) with content-based filtering (TF-IDF + BERT embeddings)',
        'Deployed real-time inference using AWS Lambda with S3 for model storage, serving personalized recommendations with <200ms latency',
        'Implemented A/B testing framework to evaluate model variants, resulting in 40% increase in user engagement (CTR)',
        'Engineered feature pipelines processing user interactions, skills data, and content metadata for daily updated embeddings',
        'Containerized ML service with Docker for consistent development-to-production workflows'
      ],
      technologies: ['LightFM', 'BERT', 'AWS Lambda', 'S3', 'Docker', 'FastAPI', 'Scikit-learn', 'Python'],
      projectLink: 'https://apps.apple.com/us/app/rat-gorls/id6740026474'
    },
    {
      id: 4,
      role: 'Machine Learning Engineer Intern',
      company: 'DLK Technology',
      companyLink: 'https://www.linkedin.com/company/dlktechnologies/',
      period: 'Apr 2023 - Jun 2023',
      icon: '📈',
      summary: 'Built time-series forecasting and anomaly detection systems',
      achievements: [
        'Developed time-series forecasting models using Prophet and LSTM',
        'Created anomaly detection system with 95% precision rate',
        'Deployed real-time analytics solutions on AWS EC2'
      ],
      technologies: ['Prophet', 'LSTM', 'AWS EC2', 'Time-Series Analysis', 'Python']
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">💼</span>
          Professional Experience
        </h2>
        
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`experience-card ${expandedId === exp.id ? 'expanded' : ''}`}
              onClick={() => toggleExpand(exp.id)}
            >
              <div className="exp-header">
                <div className="exp-header-left">
                  <div className="exp-icon">{exp.icon}</div>
                  <div className="exp-title-section">
                    <h3 className="exp-role">{exp.role}</h3>
                    {exp.companyLink ? (
                      <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="exp-company-link">
                        {exp.company}
                      </a>
                    ) : (
                      <p className="exp-company">{exp.company}</p>
                    )}
                  </div>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>

              <p className="exp-summary">{exp.summary}</p>

              {expandedId === exp.id && (
                <div className="exp-details">
                  <div className="exp-achievements">
                    <h4 className="exp-section-label">Key Achievements:</h4>
                    <ul className="exp-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.technologies && (
                    <div className="exp-tech-section">
                      <h4 className="exp-section-label">Technologies:</h4>
                      <div className="exp-tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="exp-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.projectLink && (
                    <div className="exp-link-section">
                      <a href={exp.projectLink} target="_blank" rel="noopener noreferrer" className="exp-project-link">
                        View Project →
                      </a>
                    </div>
                  )}
                </div>
              )}

              <div className="exp-toggle-indicator">
                <span>{expandedId === exp.id ? '−' : '+'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
