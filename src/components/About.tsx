import { FC, useState } from 'react'
import './About.css'

interface AboutProps {
  isActive: boolean
  onNavClick: (sectionId: string) => void
}

const skillsData = [
  'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'LangGraph', 'Hugging Face',
  'OpenCV', 'FastAPI', "Flask", 'MySQL', 'MongoDB', 'PostgreSQL', "Github", "Git", "Docker"
]

const educationData = [
  {
    date: '2023 - Present',
    title: "Bachelor's in Artificial Intelligence",
    institution: 'Fast Nuces, Islamabad',
    description: 'Studied computer science with focus on web technologies and software engineering'
  }
]

const experienceData = [
  {
    date: 'June 2025 - Sep 2025',
    title: 'AI Intern',
    company: 'Software Productivity Strategists Inc',
    description: 'Leading frontend development team using React and modern web technologies'
  }
]

const About: FC<AboutProps> = ({ isActive, onNavClick }) => {
  const [activeTab, setActiveTab] = useState('education')

  return (
    <section className={`about-section sec-padding ${isActive ? 'active' : ''}`} id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img src="/img/about-img.png" alt="about-img" />
            </div>
          </div>
          <div className="about-text">
            <p>
              AI student focused on building retrieval-augmented and agentic systems, with hands-on experience in LLM
              pipelines, NLP, and deploying optimized ML models for real-time applications.
            </p>
            <h3>Skills</h3>
            <div className="skills">
              {skillsData.map((skill) => (
                <div key={skill} className="skill-item">{skill}</div>
              ))}
            </div>

            <div className="about-tabs">
              <button
                type="button"
                className={`tab-item ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button
                type="button"
                className={`tab-item ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
            </div>

            {activeTab === 'education' && (
              <div className="tab-content active">
                <div className="timeline">
                  {educationData.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <span className="date">{item.date}</span>
                      <h4>{item.title} - <span>{item.institution}</span></h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="tab-content active">
                <div className="timeline">
                  {experienceData.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <span className="date">{item.date}</span>
                      <h4>{item.title} - <span>{item.company}</span></h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <a href="/Muhammad_Hamza_Resume.pdf" target="_blank" className="btn">Download CV</a>
            <button
              className="btn"
              onClick={() => onNavClick('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
