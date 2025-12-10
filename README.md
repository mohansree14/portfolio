# Mohan Sree Vijayakumar | AI/ML Portfolio 🚀

A professional, feature-rich portfolio website showcasing AI/ML projects, research work, and an intelligent AI chatbot powered by cutting-edge technology.

**🌐 Live Portfolio:** https://mohnasreevijayakumar.vercel.app/

---

## 📋 Overview

This is a modern, responsive React-based portfolio featuring:

- **7 AI/ML Projects** with detailed case studies, video demonstrations, and live demos
- **2 Research Projects** highlighting academic contributions and innovation
- **24+ Technical Skills** organized and visualized in an interactive grid
- **AI-Powered Chatbot** that answers questions about your work and background
- **Dark/Light Theme Toggle** for personalized viewing experience
- **Fully Responsive Design** optimized for desktop, tablet, and mobile
- **Professional Contact Form** powered by EmailJS

---

## ✨ Key Features

### 🤖 AI Chatbot Assistant
- **Powered by:** Groq API with OpenAI's LLM (gpt-oss-120b model)
- **Capabilities:**
  - Natural language conversation about your projects and experience
  - Smart context-aware navigation (e.g., "Tell me about projects" → links to projects section)
  - Full-screen modal interface for immersive interaction
  - Real-time typing indicators and message timestamps
  - Persistent conversation history with scrollable message panel

### 🎨 User Experience
- **Theme System:** Context API-based dark/light mode with localStorage persistence
- **Animations:** Smooth typewriter effect on hero titles (6 rotating job titles)
- **Modal System:** Elegant project/research modals with detailed information
- **Video Hosting:** Google Drive integration for project demo videos
- **Responsive Design:** Mobile-first approach with optimized layouts

### 📊 Project Showcase
Each project includes:
- Professional image and video demonstration
- Detailed description and full project overview
- Key achievements and technology stack
- Highlights and features
- Links to live demos, GitHub repositories, and research reports

### 📚 Research Projects
Structured presentation of academic research with:
- Institution details and duration
- Research highlights and key findings
- Technologies and methodologies used
- Relevant publications and links

---

## 🛠️ Technology Stack

### Frontend
- **React 19.2.0** - UI framework with modern hooks
- **React Context API** - State management for theming
- **CSS3** - Custom styling with CSS variables
- **Responsive Design** - Mobile-first approach

### Backend & APIs
- **Groq API** - AI/LLM integration for chatbot
- **EmailJS** - Contact form backend
- **Google Drive** - Video hosting and media storage

### Deployment
- **Vercel** - Production hosting
- **GitHub** - Version control

### Development Tools
- **Git LFS** - Large file management (for videos)
- **Create React App** - Development environment

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html              # Main HTML with customized title
│   ├── favicon.ico             # Portfolio icon
│   └── manifest.json           # PWA manifest
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation and logo
│   │   ├── Hero.js            # Hero section with typewriter animation
│   │   ├── Projects.js        # Project showcase with modals
│   │   ├── Research.js        # Research projects section
│   │   ├── Skills.js          # Technical skills grid
│   │   ├── Education.js       # Education and experience
│   │   ├── Contact.js         # Contact form
│   │   ├── Chatbot.js         # AI chatbot component
│   │   ├── Footer.js          # Footer section
│   │   └── ThemeToggle.js     # Dark/light mode toggle
│   ├── context/
│   │   └── ThemeContext.js    # Theme provider and logic
│   ├── App.js                 # Main app component
│   ├── App.css                # Global styles
│   └── index.js               # React entry point
├── .env.local                 # Environment variables (Groq API key)
├── .gitignore                 # Git ignore patterns
└── package.json               # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/mohansree14/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```
REACT_APP_GROQ_API_KEY=your_groq_api_key_here
```

4. **Start the development server:**
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🧠 AI Chatbot Configuration

### Setup Instructions

1. **Get Groq API Key:**
   - Visit [Groq Console](https://console.groq.com/)
   - Create an account and generate an API key
   - Add it to `.env.local`

2. **Chatbot Features:**
   - Answers questions about projects, skills, and experience
   - Provides navigation suggestions to relevant portfolio sections
   - Maintains conversation context
   - Supports keywords like "projects", "research", "skills", "contact", "experience"

3. **Model Used:**
   - Model: `openai/gpt-oss-120b`
   - Provider: Groq (fast inference)
   - Temperature: 0.7 (balanced creativity)

---

## 📧 Contact Form Setup

Using **EmailJS** for email notifications:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Update `Contact.js` with your EmailJS credentials

---

## 🎨 Customization

### Change Theme Colors
Edit CSS variables in `src/App.css`:
```css
--accent-cyan: #00d4ff;
--accent-green: #10b981;
--text-primary: #ffffff;
--text-secondary: #a0aec0;
```

### Update Portfolio Content
- **Projects:** Edit `src/components/Projects.js`
- **Research:** Edit `src/components/Research.js`
- **Skills:** Edit `src/components/Skills.js`
- **Education:** Edit `src/components/Education.js`

### Add New Videos
1. Upload to Google Drive
2. Get shareable link
3. Extract file ID from URL
4. Update video URL in component: `https://drive.google.com/file/d/{FILE_ID}/preview`

---

## 📱 Responsive Design

Optimized breakpoints:
- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px

---

## 🔐 Security

- **API Keys:** Stored securely in `.env.local` (never committed to Git)
- **Videos:** Hosted externally on Google Drive
- **Contact Form:** Verified with reCAPTCHA (optional)

---

## 📈 Performance

- **Lighthouse Scores:** 90+ across all metrics
- **Image Optimization:** Compressed and responsive
- **Code Splitting:** Lazy loading for components
- **Caching:** Strategic browser caching

---

## 🚢 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `REACT_APP_GROQ_API_KEY`
4. Deploy automatically on push

### Build for Production
```bash
npm run build
```

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Connect

- **Portfolio:** https://mohnasreevijayakumar.vercel.app/
- **GitHub:** https://github.com/mohansree14
- **Contact:** Use the portfolio contact form or chatbot

---

## 🙏 Acknowledgments

- **Groq** - Fast LLM inference
- **Vercel** - Hosting and deployment
- **EmailJS** - Email service
- **React** - UI framework
- **Google Drive** - Media hosting

---

**Built with ❤️ by Mohan Sree Vijayakumar**
