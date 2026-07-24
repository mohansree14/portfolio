import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Mohan's AI assistant. Ask me anything about his skills, projects, experience, research, or how to reach him!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Groq API Key
  const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY || '';

  // Knowledge base about Mohan
  const knowledgeBase = {
    about: `I'm Mohan Sree Vijayakumar, an MSc AI Student & Researcher at the University of Surrey, Guildford, UK. I'm an AI Developer specializing in architecting Agentic Workflows and RAG platforms. I'm passionate about building scalable, high-impact AI systems that solve complex real-world problems.`,
    projects: `My key AI projects include:
1. AI-Powered LinkedIn Sourcing Agent - Recruitment automation platform with 10x faster candidate identification. (FastAPI, Google Gemini)
2. Financial Time Series Forecasting - Equity forecasting with uncertainty quantification using LSTM and MC-dropout. (PyTorch, FastAPI)
3. Action Recognition with Vision Transformers - Video action recognition using TimeSformer. (PyTorch)
4. Token Classification - Biomedical abbreviation detection with BioBERT (F1: 0.84).
5. Global Trade Analytics Suite - Interactive platform forecasting trade patterns with 88% accuracy.
6. Sales Forecasting - Time series forecasting for business intelligence.
7. Movie Recommendation Engine - Hybrid filtering with NLP analysis and Power BI dashboard.
8. Skin Cancer Classification - Deep learning for medical image classification (96.08% accuracy).
9. Fruit Blitz VR - Physics-based VR slicing game for Meta Quest 2.`,
    experience: `My professional experience includes:

<strong>AI Developer</strong>, GUARDIAN AI (Oct 2025 – Jan 2026 | Remote)
Architecting Agentic Workflows and RAG platforms for enterprise AI.
• Architected Agentic Workflows and RAG pipelines using Vector Databases (FAISS)
• Implemented fine-tuned LLM logic for high-fidelity document classification
• Developed scalable model-serving architectures using FastAPI and Microservices
• Engineered Python-based fraud detection interface using prompt engineering

<strong>Machine Learning Engineer Intern</strong>, Soft4Hire (Mar 2024 – Nov 2024)
Built hybrid recommendation systems for a social career platform.
• Combined collaborative filtering (LightFM) with content-based filtering (BERT)
• Deployed real-time inference on AWS Lambda with <200ms latency
• Implemented A/B testing framework resulting in 40% increase in user engagement
• Containerized ML services with Docker

<strong>Machine Learning Engineer Intern</strong>, DLK Technology (Jun 2023 – Aug 2023)
Sales forecasting and anomaly detection for B2B analytics.
• Built sales forecasting pipeline (Prophet, SARIMA) reducing error by 30%
• Developed anomaly detection system with 95% precision
• Deployed real-time analytics dashboard on AWS EC2
• Implemented automated data validation pipelines

<strong>AI Research Intern</strong>, ACMEGRADE (Mar 2023 – May 2023)
Researching recommendation algorithms for movie platform.
• Developed content-based recommendation engine (TF-IDF, Cosine Similarity)
• Built and deployed Flask REST API serving 1,000+ users
• Created analytics dashboard for recommendation performance
• Optimized DB queries reducing response time by 40%`,
    skills: `Technical Expertise:
• Machine Learning: Statistics, Data Analytics, Scikit-learn
• AI & Deep Learning: Generative AI, NLP, Transformers, Deep Learning
• Data Processing: Data Cleaning, Data Wrangling, ETL Pipelines, Pandas
• Cloud & Big Data: AWS (S3, EC2, SageMaker), GCP (BigQuery, DataFlow), Apache Spark, NumPy
• Programming: Python, SQL, R, C++, JavaScript
• Frameworks & Tools: PyTorch, TensorFlow, FastAPI, Streamlit, Git, Docker`,
    research: `My research areas:
1. Alzheimer's Disease Detection - Unlocking cellular mechanisms with Hybrid Deep Learning (CVAE + Spatial GNN) at University of Surrey.
2. Virtual Fitting Room - AI-driven system using GANs for hyper-realistic fashion simulations.
My research focuses on applying cutting-edge deep learning to healthcare, e-commerce, and computational neuroscience.`,
    contact: `Contact Information:
Email: mohansreevijayakumare@gmail.com
Phone: +44 07887142359
Location: London, UK
LinkedIn: mohansree-vijyakumar
GitHub: mohansree14
I'm always open to collaborations and new opportunities!`,
    education: `I'm pursuing an MSc in Artificial Intelligence at the University of Surrey, UK (2025-2026). My studies focus on advanced machine learning, deep learning, NLP, and computer vision.`
  };

  const generateResponse = async (userMessage) => {
    try {
      if (!GROQ_API_KEY) {
        return "Error: API key not configured. Please check Vercel environment variables.";
      }

      const systemPrompt = `You are Mohan's AI assistant. You represent Mohan and answer questions about him in first person as if you are Mohan.

About Mohan:
${Object.values(knowledgeBase).join('\n\n')}

Guidelines:
- Always answer in first person (I, me, my)
- Be friendly, professional, and helpful
- If asked about something not in the knowledge base, politely let them know but offer to help with what you do know
- Keep responses concise but informative (2-3 sentences typically)
- Show enthusiasm about AI, machine learning, and tech
- Be genuine and personable`;

      const response = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'openai/gpt-oss-120b',
            messages: [
              {
                role: 'system',
                content: systemPrompt
              },
              {
                role: 'user',
                content: userMessage
              }
            ],
            temperature: 0.7,
            max_tokens: 300,
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Groq API Error:', errorData);
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json();

      // Check if we got a valid response
      if (!data.choices || !data.choices[0]) {
        console.error('Invalid response format:', data);
        return "I couldn't generate a response. Please try again.";
      }

      const botMessage = data.choices[0]?.message?.content || "I couldn't generate a response. Please try again.";
      return botMessage;
    } catch (error) {
      console.error('Error calling Groq API:', error);
      return `I encountered an error: ${error.message}. Please try again.`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    const userInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    // Generate bot response using Groq API
    const botResponseText = await generateResponse(userInput);

    // Check if question is related to projects and add navigation link
    let actionLink = null;
    let actionLinkText = null;

    const lowerInput = userInput.toLowerCase();

    // Priority order: Check for specific topics FIRST
    if (lowerInput.includes('project') || lowerInput.includes('recent') || lowerInput.includes('worked on')) {
      // If question mentions projects, ALWAYS link to projects section
      actionLink = '#projects';
      actionLinkText = 'View Projects';
    } else if (lowerInput.includes('research')) {
      actionLink = '#research';
      actionLinkText = 'View Research';
    } else if (lowerInput.includes('skill') || lowerInput.includes('what can you do')) {
      actionLink = '#skills';
      actionLinkText = 'View Skills';
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email')) {
      actionLink = '#contact';
      actionLinkText = 'Go to Contact';
    } else if (lowerInput.includes('education')) {
      // Education section
      actionLink = '#education';
      actionLinkText = 'View Education';
    } else if (lowerInput.includes('experience') || lowerInput.includes('intern') || lowerInput.includes('work')) {
      // Experience/Internship/Work section
      actionLink = '#education';
      actionLinkText = 'View Experience';
    }

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
        actionLink: actionLink,
        actionLinkText: actionLinkText
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 600);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const [showWelcome, setShowWelcome] = useState(false);

  // Show welcome message after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // ... existing code ...

  return (
    <div className="chatbot-container">
      {/* Welcome Bubble */}
      {showWelcome && !isOpen && (
        <div className="welcome-bubble" onClick={() => setIsOpen(true)}>
          <button
            className="welcome-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowWelcome(false);
            }}
          >
            ×
          </button>
          <p>Welcome! I'm Mohan's AI Assistant. How can I assist you today? 👋</p>
        </div>
      )}

      {/* Chat Button */}
      <button
        className="chat-button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowWelcome(false);
        }}
        title="Chat with Mohan's AI Assistant"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window - Only show when isOpen is true */}
      {isOpen && (
        <div className="chatbot-overlay" onClick={() => setIsOpen(false)}>
          <div className="chat-window-fullscreen" onClick={(e) => e.stopPropagation()}>
            <div className="chat-header">
              <h3>🤖 Mohan's AI Assistant</h3>
              <button
                className="close-btn"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                  <div className="message-content">
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                    {msg.actionLink && (
                      <button
                        className="action-link-btn"
                        onClick={() => {
                          window.location.href = msg.actionLink;
                          setIsOpen(false);
                        }}
                      >
                        {msg.actionLinkText} →
                      </button>
                    )}
                  </div>
                  <div className="message-time">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="message bot">
                  <div className="message-content typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-area">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="send-btn"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
