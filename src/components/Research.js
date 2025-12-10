import React, { useState } from 'react';
import './Research.css';

const Research = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Alzheimer\'s: Unlocking Cellular Mechanisms with Hybrid Deep Learning',
      duration: '2024 - 2025',
      institution: 'University of Surrey, Surrey, United Kingdom',
      icon: '🧬',
      description: 'Scalable end-to-end ML framework for overcoming computational challenges in scRNA-seq data with predictive, interpretable insights.',
      fullDescription: 'A comprehensive, scalable, end-to-end Machine Learning framework designed to overcome the computational challenges of single-cell RNA sequencing (scRNA-seq) data and provide predictive, interpretable insights into the cellular pathology of Alzheimer\'s Disease (AD). The framework integrates novel deep learning models including CVAE for data denoising, Spatial GNN for cellular interaction networks, and the proprietary DIG-Ensemble for multi-modal classification with SHAP-based interpretation.',
      achievements: [
        'Achieved 97.96% Random Forest accuracy/F1-Score as strong baseline for biological reporting',
        'Spatial GNN achieved 60.61% accuracy in modeling complex cellular interactions',
        'SHAP analysis successfully identified key AD biomarkers (APOE, TREM2) with biological validation',
        'Processed 14 age-matched 73GB data files in under one hour - demonstrated computational scalability',
        'DIG-Ensemble model (65.82% accuracy) provides novel interpretations of complex multi-modal genomic data'
      ],
      technologies: ['Python', 'PyTorch', 'Graph Neural Networks', 'Variational Autoencoders (CVAE)', 'Single-Cell Genomics', 'SHAP', 'Deep Learning', 'Machine Learning', 'Bioinformatics', 'scRNA-seq', 'Ensemble Methods'],
      highlights: [
        'Novel hybrid DIG-Ensemble multi-modal classification system with differentiable forest and attention-gated mechanisms',
        'Spatial GNN for modeling complex cellular interaction networks within AD pathology',
        'SHAP interpretation framework providing biologically-meaningful insights into predictive features',
        'End-to-end scalable framework for rapid large-scale clinical application'
      ],
      image: '/Alzheimer.jpg',
      links: {
        github: 'https://github.com/mohansree14/Prediction-of-Cellular-Mechanisms-Alzheimer--Disease.git',
        report: 'https://drive.google.com/file/d/1_CXlWsg7u_lF3shCnDAIj58FNpivj3KJ/view?usp=sharing',
        paper: 'Coming Soon'
      }
    },
    {
      id: 2,
      title: 'AI-driven Virtual Fitting Room using GANs',
      duration: 'Aug 2023 - Mar 2024',
      institution: 'SRMIST, Kattankulathur, Chennai, Tamil Nadu',
      icon: '👗',
      description: 'AI-driven virtual fitting room using GANs for fashion e-commerce with hyper-realistic eyewear simulations and AR integration.',
      fullDescription: 'Developed an AI-driven virtual fitting room system leveraging Generative Adversarial Networks (GANs) for fashion retailers. The project offers virtual try-ons with personalized 3D simulations and integrates augmented reality (AR) technology for a tailored online shopping experience. By leveraging advanced AI and machine learning, the system aims to significantly reduce return rates, enhance customer satisfaction, and boost sales for apparel and fashion accessory businesses.',
      achievements: [
        'Successfully implemented hyper-realistic AI-powered virtual try-on for glasses and eyewear',
        'Developed GAN-based synthesis achieving high-accuracy clothing fit predictions',
        'Integrated AR technology for seamless virtual fitting experience in mobile and web platforms',
        'Created scalable solution supporting integration with 5+ e-commerce platforms',
        'Reduced expected return rates by 35% through improved product visualization'
      ],
      technologies: ['Python', 'GANs', 'TensorFlow', 'Keras', 'Django', 'Computer Vision', 'AR Technology', 'OpenCV', '3D Modeling', 'Machine Learning', 'Deep Learning', 'Data Modeling'],
      highlights: [
        'GAN-based virtual synthesis for hyper-realistic eyewear rendering',
        'Integrated AR technology for immersive fitting room experience',
        'Personalized 3D simulations based on user features and preferences',
        'Scalable e-commerce integration reducing product returns by 35%',
        'Enhanced customer satisfaction through improved product visualization'
      ],
      image: '/VFR.jpg',
      links: {
        github: 'https://github.com/mohansree14/Virtual-Fitting-Room.git',
        report: 'https://drive.google.com/file/d/1kuf9O1rjgwxkrZmahhTfXp6Bc5w-hqK0/view?usp=sharing',
        paper: 'https://drive.google.com/file/d/1p63RKK_iSCK52RXiZx-83Wc3sEBHbsoq/view'
      }
    }
  ];

  return (
    <>
      <section className="research" id="research">
        <div className="container">
          <h2 className="section-title">
            <span className="section-icon">🔬</span>
            Research & Innovation
          </h2>
          <p className="section-subtitle">Cutting-edge research projects exploring AI applications in healthcare, fashion technology, and computational neuroscience</p>

          <div className="research-list">
            {projects.map((project) => (
              <div
                key={project.id}
                className="research-card"
                onClick={() => setSelectedProject(project)}
              >
                {/* Header - Always Visible */}
                <div className="research-header">
                  <div className="research-icon">{project.icon}</div>
                  <div className="research-title-group">
                    <h3 className="research-title">{project.title}</h3>
                    <p className="research-institution">{project.institution}</p>
                    <span className="research-duration">{project.duration}</span>
                  </div>
                  <div className="expand-toggle">
                    <span className="toggle-icon">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="research-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="research-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>

            <div className="modal-header">
              {selectedProject.image && (
                <div className="modal-image-container">
                  <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                </div>
              )}
              <div className="modal-header-content">
                <span className="modal-icon">{selectedProject.icon}</span>
                <div>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-institution">{selectedProject.institution}</p>
                  <p className="modal-duration">{selectedProject.duration}</p>
                </div>
              </div>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <p className="modal-description">{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Key Achievements</h3>
                <ul className="modal-achievements-list">
                  {selectedProject.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Research Highlights</h3>
                <div className="modal-highlights-list">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="modal-highlight-item">✓ {highlight}</div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Technologies & Skills</h3>
                <div className="modal-tech-list">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="modal-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {selectedProject.links && (
                <div className="modal-section">
                  <h3 className="modal-section-title">Research Links</h3>
                  <div className="modal-links">
                    {selectedProject.links.paper && (
                      <a href={selectedProject.links.paper} target="_blank" rel="noopener noreferrer" className="modal-link">
                        <span className="link-icon">📄</span> {selectedProject.links.paper === 'Coming Soon' ? 'Research Paper (Coming Soon)' : 'Research Paper'}
                      </a>
                    )}
                    {selectedProject.links.report && (
                      <a href={selectedProject.links.report} target="_blank" rel="noopener noreferrer" className="modal-link">
                        <span className="link-icon">📋</span> Detailed Report
                      </a>
                    )}
                    {selectedProject.links.github && (
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                        <span className="link-icon">🔗</span> GitHub Repository
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

export default Research;
