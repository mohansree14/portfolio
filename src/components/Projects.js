import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Financial Time Series Forecasting with Uncertainty Quantification",
      category: "Machine Learning",
      tech: "PyTorch • Streamlit • FastAPI",
      description: "Production-ready prototype for equity forecasting with quantified predictive uncertainty, supporting risk-aware trading.",
      fullDescription: "Production-ready prototype for equity forecasting with quantified predictive uncertainty, supporting risk-aware trading. Combines LSTM baseline and MC-dropout methods for probabilistic forecasts and confidence estimation.",
      technologies: ["Python", "PyTorch", "FastAPI", "Streamlit", "Uvicorn", "Plotly", "LSTM", "MC-Dropout", "Time Series Analysis", "Quantitative Analysis"],
      achievements: [
        "Built interactive Streamlit UI with Plotly visualizations for time series, confidence bands, and candlestick charts",
        "Developed FastAPI service with scalable /predict endpoint returning mean, std, and sample size",
        "Implemented end-to-end ML pipeline with feature engineering (SMA, EMA, RSI, MACD, Bollinger, Stochastic)",
        "Created modular, containerizable codebase supporting GPU microservices with clear API contracts",
        "Designed UI/inference separation enabling independent scaling and deployment monitoring"
      ],
      highlights: ["Risk-explicit uncertainty bands for safer signals", "Interactive Streamlit UI with Plotly", "FastAPI microservice architecture", "Integrates with trading dashboards and backtesters"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/project-demo.mp4",
      links: {
        demo: "https://bayesian-financial-forecasting.streamlit.app/",
        github: "https://github.com/mohansree14/Bayesian-Deep-Learning-for-Probabilistic-Financial-Forecasting.git",
        report: "https://drive.google.com/file/d/1P-6ZK-Sz0Y4bNoTp756U7LuwyiyK2u0h/view?usp=sharing"
      }
    },
    {
      id: 2,
      title: "Action Recognition using Vision Transformer",
      category: "Computer Vision",
      tech: "PyTorch • OpenCV • Streamlit",
      description: "Deep learning framework for human action recognition using transformer-based architectures",
      fullDescription: "Implemented a deep learning framework for human action recognition using transformer-based architectures, with primary focus on the TimeSformer model for capturing spatiotemporal features. Explored performance trade-offs by comparing TimeSformer with Vision Transformer (ViT) and Data-efficient Image Transformer (DeiT) on curated video datasets.",
      technologies: ["Python", "PyTorch", "Transformers", "OpenCV", "Streamlit", "Git", "Computer Vision", "Deep Learning", "Spatiotemporal Modeling"],
      achievements: [
        "Utilized TimeSformer as core model for spatial and temporal dependencies across video frames",
        "Benchmarked performance against ViT and DeiT using identical experimental setups",
        "Applied comprehensive data augmentations: random crop, horizontal flip, brightness adjustment, optical flow",
        "Processed videos by extracting fixed-length frame sequences with class-based action labeling",
        "Developed web application enabling real-time action prediction from user-uploaded video snippets"
      ],
      highlights: ["TimeSformer for efficient video modeling", "Comprehensive data augmentation pipeline", "Real-time video processing capability", "Interactive web application interface"],
      image: "/Vitimage.png",
      videoUrl: "/vit-demo.mp4",
      links: {
        demo: "https://action-recognition-using-vit.streamlit.app/",
        github: "https://github.com/AML-CW/Action-Recognition-Using-Vision-Transformers-",
        report: "https://drive.google.com/file/d/1tE1MAnlgJNsdPuBwHQO7kXnqcQxKKmGT/view?usp=sharing"
      }
    },
    {
      id: 3,
      title: "Token Classification for Abbreviation and Long-Form Detection",
      category: "Natural Language Processing",
      tech: "BioBERT • Transformers • Streamlit",
      description: "Comprehensive suite of models to detect biomedical abbreviations with BioBERT achieving F1: 0.84",
      fullDescription: "Developed and evaluated a suite of models to detect abbreviations and their corresponding long forms in biomedical texts using the PLOD-CW-25 dataset. Approaches ranged from classical machine learning to deep learning and transformer-based architectures, including prompt-based inference with large language models.",
      technologies: ["Python", "Transformers", "BioBERT", "SciBERT", "RoBERTa", "Streamlit", "NLP", "Token Classification", "Machine Learning", "Deep Learning"],
      achievements: [
        "BioBERT outperformed all models with F1 score of 0.84, followed by SciBERT (0.83) and RoBERTa (0.82)",
        "Tested classical models: HMM (Viterbi), CRF with L-BFGS achieving F1: 0.72, SVM with TF-IDF",
        "Developed deep learning approaches: BiLSTM with GloVe, BiLSTM + CNN achieving F1: 0.78",
        "Deployed BioBERT model in real-time Streamlit web application with interactive highlighting",
        "Processed PLOD-CW-25 dataset with 2,400 BIO-annotated sequences and POS tags"
      ],
      highlights: ["BioBERT achieved highest F1 score (0.84)", "Comprehensive model comparison across classical, deep learning, and transformers", "Interactive web app with abbreviation/long-form highlighting", "Production-ready for clinical workflows"],
      image: "/tokenimage.jpg",
      videoUrl: "/token-demo.mp4",
      links: {
        demo: "https://token-classification.streamlit.app/",
        github: "https://github.com/mohansree14/Token-Classification.git",
        report: "https://drive.google.com/file/d/1dEtu-nKK8MzIEW5txj8ca-i-ZeHyQXYZ/view"
      }
    },
    {
      id: 4,
      title: "AI-Powered LinkedIn Sourcing Agent: Transforming Enterprise Recruitment",
      category: "AI & Automation",
      tech: "FastAPI • Google Gemini • Streamlit",
      description: "Production recruitment automation platform with 10x faster candidate identification",
      fullDescription: "Built a comprehensive, production-ready recruitment automation platform for Synapse AI Hackathon addressing talent acquisition challenges. Features multi-platform integration, AI-powered scoring, automated outreach, and analytics dashboard.",
      technologies: ["Python", "FastAPI", "Google Gemini", "OpenAI", "Streamlit", "Plotly", "Async Processing", "Machine Learning", "Data Analytics", "AI Agents"],
      achievements: [
        "10x faster candidate identification vs manual process",
        "Achieved 94% accuracy in candidate-job matching with 6-dimensional evaluation",
        "Integrated multi-platform sourcing: LinkedIn, GitHub, Stack Overflow",
        "Deployed production-ready platform with 2,500+ lines of tested code",
        "Scalable architecture supporting 100+ concurrent searches with enterprise-grade security"
      ],
      highlights: ["Multi-platform integration for automated sourcing", "AI scoring algorithm with 6-dimensional evaluation", "Analytics dashboard with Excel/Google Sheets integration", "Reduced bias through data-driven evaluation"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/linkedin-agent-demo.mp4",
      links: {
        demo: "https://linkedinsourcingagent.streamlit.app/",
        github: "https://github.com/mohansree14/linkedin_sourcing_agent.git"
      }
    },
    {
      id: 5,
      title: "Sales Forecasting using Machine Learning",
      category: "Data Science",
      tech: "Python • Time Series • Regression",
      description: "Regression and time series analysis for sales forecasting with historical company data",
      fullDescription: "Developed a comprehensive sales forecasting system using regression and time series analysis to predict sales for a company. The project processes historical sales data using advanced regression models and time series techniques to forecast future sales for multiple time periods, enabling data-driven business decisions.",
      technologies: ["Python", "Time Series Analysis", "Time Series Forecasting", "Regression", "Data Mining", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
      achievements: [
        "Implemented multiple regression models for next time period sales prediction",
        "Developed time series forecasting models for multi-period sales projections",
        "Processed and analyzed historical sales data for pattern identification",
        "Created actionable forecasts supporting business planning and resource allocation",
        "Validated models using historical data with multiple performance metrics"
      ],
      highlights: ["Hybrid regression and time series approach", "Historical data analysis", "Multi-period forecasting", "Business intelligence integration"],
      image: "/sales.png",
      links: {
        github: "https://github.com/mohansree14/sales-forecasting.git",
        report: "https://drive.google.com/file/d/1-oBHQGV7YnG1jRD5GiiUD6vVofIIVui2/view?usp=sharing"
      }
    },
    {
      id: 6,
      title: "Movie Recommendation Engine",
      category: "Machine Learning",
      tech: "TensorFlow • MongoDB • NLP • Power BI",
      description: "Advanced ML-driven recommendation system with NLP analysis and interactive Power BI dashboard",
      fullDescription: "Developed an advanced movie recommendation engine leveraging machine learning algorithms with Python as the core programming language. The system harnesses the power of libraries such as NumPy, Pandas, and Scikit-learn for data processing, modeling, and prediction. MongoDB was employed to store and manage comprehensive movie information. Incorporating Natural Language Processing (NLP) techniques, the engine analyzes textual reviews and descriptions alongside user preferences and historical data to offer highly personalized movie suggestions.",
      technologies: ["Python", "TensorFlow", "MongoDB", "NLP", "Scikit-learn", "Streamlit", "NumPy", "Pandas", "Machine Learning", "Data Mining", "Power BI"],
      achievements: [
        "Improved recommendation accuracy by 78% with hybrid filtering approach",
        "Analyzed 100,000+ movie reviews using NLP for content-based recommendations",
        "Deployed interactive Power BI dashboard for recommendation analytics and insights",
        "Reduced cold-start problem for new users through content-based filtering",
        "Achieved 0.82 precision on personalized recommendations"
      ],
      highlights: ["Hybrid recommendation approach (collaborative + content-based)", "NLP-based movie review analysis", "Interactive Power BI dashboard", "Machine learning model optimization", "Data-driven personalization"],
      image: "/Movie.jpg",
      links: {
        dashboard: "https://app.powerbi.com/view?r=eyJrIjoiZDJjMTc5NWMtZGRhNi00ZGRmLTk0YWUtOWFkMjJiOGU0ZTgzIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
        github: "https://github.com/mohansree14/mohansree14-movie-recommendation-engine.git"
      }
    },
    {
      id: 7,
      title: "Skin Cancer Classification using Deep Learning",
      category: "Computer Vision",
      tech: "TensorFlow • CNN • Python",
      description: "AI-powered diagnostic tool for skin lesion classification with 96.08% accuracy across 7 lesion types",
      fullDescription: "Developed an AI-powered prototype tool aimed at assisting doctors and lab technologists in quickly identifying potential high-risk patients based on skin lesion images. The tool leverages a Convolutional Neural Network (CNN) built using Python and TensorFlow, achieving an impressive accuracy of 96.08% in classifying 7 types of skin lesions. Provides real-time assistance for clinical decision-making and risk stratification.",
      technologies: ["Python", "TensorFlow", "Convolutional Neural Networks", "Deep Learning", "Artificial Intelligence", "Computer Vision", "Keras", "NumPy", "Medical Imaging"],
      achievements: [
        "Achieved 96.08% accuracy in classifying 7 types of skin lesions with CNN architecture",
        "Developed real-time diagnosis support tool for clinical use by doctors and technologists",
        "Implemented deep learning pipeline optimized for medical image processing",
        "Created web-based demo application for easy accessibility and testing",
        "Trained on comprehensive skin lesion dataset with rigorous validation protocols"
      ],
      highlights: ["96.08% accuracy on 7-class classification", "Clinical decision support tool", "Real-time web-based deployment", "AI-assisted risk stratification", "SRMIST research collaboration"],
      image: "/skin.jpg",
      links: {
        demo: "http://skin.test.woza.work/",
        github: "https://github.com/mohansree14/skin-cancer-classification-usind-deeplearning.git",
        report: "https://drive.google.com/file/d/1LBY10ly5xCjtyd0aM53gzhbcQau8-8Ja/view?usp=sharing"
      }
    }
  ];

  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">
            <span className="section-icon">🚀</span>
            Projects
          </h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div 
                className="project-card" 
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="open-icon">→</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-tech">• {project.tech}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="projects-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="projects-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            
            <div className="modal-header">
              <div className="modal-image-container">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              </div>
              <div className="modal-header-content">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-category">{selectedProject.category}</p>
                <p className="modal-tech-brief">{selectedProject.tech}</p>
              </div>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <h3 className="modal-section-title">Overview</h3>
                <p className="modal-description">{selectedProject.fullDescription}</p>
              </div>

              {selectedProject.videoUrl && (
                <div className="modal-section">
                  <h3 className="modal-section-title">Project Demo</h3>
                  <div className="modal-video-container">
                    <video 
                      controls 
                      className="modal-video"
                      controlsList="nodownload"
                    >
                      <source src={selectedProject.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}

              <div className="modal-section">
                <h3 className="modal-section-title">Key Achievements</h3>
                <ul className="modal-achievements-list">
                  {selectedProject.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Highlights</h3>
                <div className="modal-highlights-list">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="modal-highlight-item">✓ {highlight}</div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Technologies Used</h3>
                <div className="modal-tech-list">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="modal-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {selectedProject.links && (
                <div className="modal-section">
                  <h3 className="modal-section-title">Project Links</h3>
                  <div className="modal-links">
                    {selectedProject.links.demo && (
                      <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="modal-link">
                        <span className="link-icon">🌐</span> Live Demo
                      </a>
                    )}
                    {selectedProject.links.dashboard && (
                      <a href={selectedProject.links.dashboard} target="_blank" rel="noopener noreferrer" className="modal-link">
                        <span className="link-icon">📊</span> Power BI Dashboard
                      </a>
                    )}
                    {selectedProject.links.github && (
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                        <span className="link-icon">🔗</span> GitHub Repository
                      </a>
                    )}
                    {selectedProject.links.report && (
                      <a href={selectedProject.links.report} target="_blank" rel="noopener noreferrer" className="modal-link">
                        <span className="link-icon">📄</span> Research Report
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;