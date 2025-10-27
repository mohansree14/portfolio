import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsByCategory = {
    'Machine Learning': [
      { name: 'Machine Learning', icon: 'brain' },
      { name: 'Statistics', icon: 'chart' },
      { name: 'Data Analytics', icon: 'graph-up' },
      { name: 'Scikit-learn', icon: 'graph-up' }
    ],
    'AI & Deep Learning': [
      { name: 'Generative AI', icon: 'lightning' },
      { name: 'NLP', icon: 'book' },
      { name: 'Deep Learning', icon: 'brain' },
      { name: 'Transformers', icon: 'refresh' }
    ],
    'Data Processing': [
      { name: 'Data Cleaning', icon: 'cog' },
      { name: 'Data Wrangling', icon: 'refresh' },
      { name: 'ETL Pipelines', icon: 'link' },
      { name: 'Pandas', icon: 'chart' }
    ],
    'Cloud & Big Data': [
      { name: 'AWS (S3, EC2, SageMaker)', icon: 'cloud' },
      { name: 'GCP (BigQuery, DataFlow)', icon: 'cloud' },
      { name: 'Apache Spark', icon: 'lightning' },
      { name: 'NumPy', icon: 'number' }
    ],
    'Programming': [
      { name: 'Python', icon: 'snake' },
      { name: 'SQL', icon: 'database' },
      { name: 'R', icon: 'chart' },
      { name: 'C++', icon: 'cog' },
      { name: 'JavaScript', icon: 'sparkles' }
    ],
    'Frameworks & Tools': [
      { name: 'PyTorch', icon: 'lightning' },
      { name: 'TensorFlow', icon: 'brain' },
      { name: 'FastAPI', icon: 'cog' },
      { name: 'Streamlit', icon: 'target' }
    ]
  };

  const getEmoji = (iconName) => {
    const emojiMap = {
      lightning: '⚡',
      brain: '🧠',
      refresh: '🔄',
      link: '🔗',
      cloud: '☁️',
      cog: '⚙️',
      target: '🎯',
      leaf: '🍃',
      snake: '🐍',
      sparkles: '✨',
      book: '📚',
      coffee: '☕',
      chart: '📊',
      number: '🔢',
      'graph-up': '📈',
      'graph-down': '📉',
      camera: '📷',
      image: '🖼️',
      atom: '⚛️',
      triangle: '▲',
      box: '📦',
      rocket: '🚀',
      database: '🗄️'
    };
    return emojiMap[iconName] || '';
  };

  const getCategoryIcon = (category) => {
    const categoryIcons = {
      'Machine Learning': '🧠',
      'AI & Deep Learning': '⚡',
      'Data Processing': '🔄',
      'Cloud & Big Data': '☁️',
      'Programming': '�',
      'Frameworks & Tools': '🛠️'
    };
    return categoryIcons[category] || '⚙️';
  };

  return (
    <section className='skills' id='skills'>
      <div className='container'>
        <h2 className='section-title'>
          <span className='section-icon'></span>
          Technical Expertise
        </h2>
        <p className='section-subtitle'>Specialized skills and technologies I work with</p>
        
        <div className='skills-categories'>
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className='category-section'>
              <div className='category-header'>
                <div className='category-large-icon'>{getCategoryIcon(category)}</div>
                <h3 className='category-title'>{category}</h3>
              </div>
              <div className='skills-list'>
                {skills.map((skill, index) => (
                  <div className='skill-item' key={index}>
                    <div className='skill-item-icon'>{getEmoji(skill.icon)}</div>
                    <p className='skill-item-name'>{skill.name}</p>
                    <div className='skill-indicator'></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
