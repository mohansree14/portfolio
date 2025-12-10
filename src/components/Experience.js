import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experiences = [
    {
      id: 2,
      title: 'Head of AI Engineering',
      company: 'Cledion',
      companyUrl: 'https://www.cledion.com/',
      period: 'Oct 2024 – Present | Remote',
      status: 'MVP Stage',
      tagline: 'Political & Economic Intelligence Platform',
      summary: 'Building a political intelligence platform with NLP and distributed data pipelines. Processing global data for real-time risk analytics.',
      overview: 'As the sole AI specialist at Cledion, I architect and build the complete AI stack for a geopolitical intelligence platform that transforms unstructured global data into actionable insights for enterprise clients through scalable NLP systems and interactive dashboards.',
      achievements: [
        'Built distributed data pipeline processing 5TB+ of global news and legislative documents using Apache Spark',
        'Developed production NLP models for entity recognition and sentiment analysis achieving 94% accuracy',
        'Created real-time intelligence dashboard with Plotly Dash used by clients for risk monitoring',
        'Established full MLOps pipeline on AWS SageMaker with automated retraining and deployment'
      ],
      techCategories: {
        'AI/ML': ['Hugging Face Transformers', 'spaCy', 'Sentence Transformers'],
        'Data Engineering': ['Apache Spark', 'Apache Airflow', 'PostgreSQL'],
        'Cloud & Deployment': ['AWS (SageMaker, S3, Lambda)', 'Docker', 'Git'],
        'Visualization': ['Plotly Dash', 'Streamlit']
      },
      impact: [
        'Enabled clients to track geopolitical risks in real-time with interactive dashboards',
        'Reduced data processing time from days to hours through distributed computing',
        'Provided actionable intelligence for strategic decision-making in volatile markets'
      ]
    },
    {
      id: 1,
      title: 'AI Lead & Cofounder',
      company: 'BSure',
      companyUrl: 'https://bsure.ai',
      period: 'Jan 2024 - Present',
      status: 'MVP Stage',
      icon: '🚀',
      tagline: 'AI-Powered FashionTech Retail Platform',
      summary: 'AI-powered FashionTech platform with computer vision and 3D visualization. Rapid prototyping for retail transformation.',
      overview: 'Leading AI development for a FashionTech platform that combines computer vision, 3D visualization, and recommendation systems to transform online fashion retail through immersive shopping experiences.',
      achievements: [
        'Architected multi-modal recommendation engine using CLIP + ResNet for fashion product matching',
        'Engineered real-time 3D garment visualization with Three.js, reducing return intent through virtual try-on',
        'Built microservices backend with FastAPI serving <100ms inference latency',
        'Implemented A/B testing framework increasing user engagement by 22%'
      ],
      techCategories: {
        'Computer Vision': ['PyTorch', 'OpenCV', 'CLIP', 'YOLO'],
        '3D & Frontend': ['Three.js', 'WebGL', 'React'],
        'Backend': ['FastAPI', 'Docker', 'PostgreSQL'],
        'Cloud': ['AWS (Lambda, S3, EC2)'],
        'Analytics': ['A/B Testing', 'Mixpanel']
      },
      impact: [
        'Created immersive shopping experience reducing product returns by 40%',
        'Increased user session duration by 22% through personalized recommendations',
        'Built investor-ready demo securing early platform validation and user adoption'
      ]
    },
    {
      id: 3,
      title: 'Machine Learning Engineer Intern',
      company: 'Soft4Hire',
      companyUrl: 'https://in.linkedin.com/company/soft4hire',
      period: 'Mar 2024 – Nov 2024 | Chennai, India',
      icon: '🤖',
      tagline: 'Social Career Platform (Instagram + LinkedIn Hybrid)',
      summary: 'Built hybrid recommendation systems deployed on AWS Lambda. Real-time inference for social career platform.',
      overview: 'Developed and deployed production recommendation systems for a social career platform, focusing on hybrid algorithms and real-time serving infrastructure to personalize user experiences.',
      achievements: [
        'Built hybrid recommendation engine combining collaborative filtering (LightFM) with content-based filtering (TF-IDF + BERT)',
        'Deployed real-time inference on AWS Lambda with S3, achieving <200ms latency for personalized recommendations',
        'Implemented A/B testing framework resulting in 40% increase in user engagement metrics',
        'Containerized ML services with Docker ensuring consistent development-to-production workflows'
      ],
      techCategories: {
        'ML Algorithms': ['LightFM', 'BERT', 'TF-IDF', 'Cosine Similarity'],
        'Deployment': ['AWS Lambda', 'S3', 'Docker', 'FastAPI'],
        'Tools': ['Git', 'JIRA', 'MLflow', 'FeatureTools'],
        'Languages': ['Python', 'SQL']
      },
      impact: [
        'Personalization drove 25% of platform content consumption',
        'Reduced cold-start problem for new users by 60% through content-based fallback',
        'Recommendations increased profile completion rate by 35%'
      ],
      appLink: {
        label: 'Rat Gorls App',
        url: 'https://apps.apple.com/us/app/rat-gorls/id6740026474',
        owner: 'Soft4Hire'
      }
    },
    {
      id: 4,
      title: 'Machine Learning Engineer Intern',
      company: 'DLK Technology',
      companyUrl: 'https://www.linkedin.com/company/dlktechnologies/',
      period: 'Jun 2023 – Aug 2023 | Remote',
      icon: '⚙️',
      tagline: 'B2B Sales Analytics Platform',
      summary: 'Sales forecasting and anomaly detection for B2B analytics. Time-series models deployed on AWS.',
      overview: 'Developed and deployed machine learning models for sales forecasting and anomaly detection in a B2B analytics platform, focusing on time-series analysis and real-time monitoring for sales teams.',
      achievements: [
        'Built sales forecasting pipeline using Prophet and SARIMA models, reducing prediction error by 30% compared to baseline methods',
        'Developed anomaly detection system identifying unusual sales patterns with 95% precision rate',
        'Deployed real-time analytics dashboard on AWS EC2 for client monitoring and alerting',
        'Implemented automated data validation pipelines ensuring 99.8% data quality for ML training'
      ],
      techCategories: {
        'Time Series Analysis': ['Prophet', 'SARIMA', 'Exponential Smoothing'],
        'ML Framework': ['Scikit-learn', 'Statsmodels', 'Pandas'],
        'Cloud & Deployment': ['AWS EC2', 'S3', 'CloudWatch'],
        'Data Processing': ['Pandas', 'NumPy', 'SQL'],
        'Visualization': ['Matplotlib', 'Seaborn', 'Plotly']
      },
      impact: [
        'Enabled clients to forecast quarterly sales with 30% higher accuracy',
        'Reduced manual monitoring time by 40 hours/month through automated anomaly detection',
        'Provided real-time insights helping sales teams adjust strategies mid-quarter'
      ]
    },
    {
      id: 5,
      title: 'AI Research Intern',
      company: 'ACMEGRADE',
      companyUrl: 'https://www.acmegrade.com/',
      period: 'Mar 2023 – May 2023 | Remote',
      icon: '🧠',
      tagline: 'Movie Recommendation Platform',
      summary: 'Researched and implemented recommendation algorithms for a movie platform, focusing on NLP-based content analysis.',
      overview: 'Researched and implemented recommendation algorithms for a movie platform, focusing on NLP-based content analysis and scalable API deployment to serve personalized recommendations.',
      achievements: [
        'Developed content-based recommendation engine using TF-IDF and cosine similarity for movie matching',
        'Built and deployed Flask REST API serving real-time recommendations to 1,000+ concurrent users',
        'Created analytics dashboard visualizing user engagement patterns and recommendation performance',
        'Optimized database queries reducing API response time by 40% through MongoDB indexing'
      ],
      techCategories: {
        'NLP & ML': ['TF-IDF', 'Cosine Similarity', 'Scikit-learn'],
        'Backend Development': ['Flask', 'REST APIs', 'MongoDB'],
        'Deployment': ['Gunicorn', 'Nginx', 'Docker'],
        'Data Analysis': ['Pandas', 'Matplotlib'],
        'Database': ['MongoDB', 'PyMongo']
      },
      researchInsights: [
        'Compared collaborative filtering vs. content-based approaches for cold-start problem',
        'Implemented hybrid scoring combining genre, director, and actor embeddings',
        'Analyzed user behavior patterns to improve recommendation relevance by 25%'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">💼</span>
          Experience
        </h2>

        <div className="experience-list">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            // Fallback for older data structure
            const summary = exp.summary || (Array.isArray(exp.description) ? exp.description[0] : exp.description);

            return (
              <div
                key={exp.id}
                className={`experience-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="exp-visible-content">
                  <div className="exp-icon">{exp.icon || '💼'}</div>
                  <div className="exp-content">
                    <div className="exp-header">
                      <div>
                        <div className="exp-title-row">
                          <h3 className="exp-title">{exp.title}</h3>
                          {exp.status && <span className="exp-status-badge">{exp.status}</span>}
                        </div>
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company-link" onClick={e => e.stopPropagation()}>
                            {exp.company} ↗
                          </a>
                        ) : (
                          <p className="exp-company">{exp.company}</p>
                        )}
                      </div>
                      <span className="exp-period">{exp.period}</span>
                    </div>
                    {exp.tagline && <p className="exp-tagline">{exp.tagline}</p>}
                    <p className="exp-summary">{summary}</p>
                  </div>
                  <div className="exp-toggle-icon">
                    {isExpanded ? '−' : '+'}
                  </div>
                </div>

                {/* Expanded Details */}
                <div className={`exp-details-container ${isExpanded ? 'show' : ''}`}>
                  <div className="exp-separator"></div>

                  {/* Overview */}
                  {exp.overview && (
                    <div className="exp-section">
                      <h4 className="exp-section-title">Overview</h4>
                      <p className="exp-text">{exp.overview}</p>
                    </div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="exp-section">
                      <h4 className="exp-section-title">Key Achievements</h4>
                      <ul className="exp-list">
                        {exp.achievements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Legacy Description Array Fallback */}
                  {!exp.achievements && Array.isArray(exp.description) && (
                    <ul className="exp-list">
                      {exp.description.slice(1).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* Impact */}
                  {exp.impact && (
                    <div className="exp-section">
                      <h4 className="exp-section-title">Business Impact</h4>
                      <ul className="exp-list">
                        {exp.impact.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Research Insights (Specific to ACMEGRADE) */}
                  {exp.researchInsights && (
                    <div className="exp-section">
                      <h4 className="exp-section-title">Research Insights</h4>
                      <ul className="exp-list">
                        {exp.researchInsights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="exp-section">
                    <h4 className="exp-section-title">Technologies</h4>
                    {exp.techCategories ? (
                      <div className="exp-tech-grid">
                        {Object.entries(exp.techCategories).map(([category, techs]) => (
                          <div key={category} className="tech-category">
                            <span className="tech-category-name">{category}:</span>
                            <div className="tech-tags-inline">
                              {techs.map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="exp-tech">
                        {exp.tech && exp.tech.map((t, idx) => (
                          <span key={idx} className="tech-tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Links */}
                  {exp.appLink && (
                    <div className="exp-link">
                      <div className="app-link-container">
                        <div className="app-link-header">
                          <span className="app-link-label">Project Link</span>
                          <span className="app-owner">(owned by {exp.appLink.owner})</span>
                        </div>
                        <a
                          href={exp.appLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="app-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="app-icon">📱</span>
                          <span className="app-name">{exp.appLink.label}</span>
                          <span className="app-external">↗</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
