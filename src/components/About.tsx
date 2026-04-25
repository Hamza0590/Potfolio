import { FC, useState, useRef, useEffect } from 'react'
import {
  Code2,
  Brain,
  Database,
  Cloud,
  Cpu,
  Eye
} from 'lucide-react'
import './About.css'

interface AboutProps {
  isActive: boolean
  onNavClick: (sectionId: string) => void
}

const skillsCategories = [
  {
    category: 'Machine Learning',
    id: 'ml',
    icon: <Cpu size={20} />,
    items: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'Scikit-Learn', icon: 'scikitlearn' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Pandas', icon: 'pandas' }
    ]
  },
  {
    category: 'NLP & LLMs',
    id: 'nlp',
    icon: <Brain size={20} />,
    items: [
      { name: 'Transformers', icon: 'huggingface' },
      { name: 'LangChain', icon: 'none' },
      { name: 'LangGraph', icon: 'none' },
      { name: 'Spacy', icon: 'spacy' },
      { name: 'OpenAI', icon: 'none' }
    ]
  },
  {
    category: 'Computer Vision',
    id: 'cv',
    icon: <Eye size={20} />,
    items: [
      { name: 'OpenCV', icon: 'opencv' },
      { name: 'Matplotlib', icon: 'none' },
      { name: 'MediaPipe', icon: 'none' }
    ]
  },
  {
    category: 'Data & Databases',
    id: 'data',
    icon: <Database size={20} />,
    items: [

      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Pinecone', icon: 'none' },
      { name: 'Chroma DB', icon: 'none' },
      { name: 'Weaviate', icon: 'none' },
      { name: 'Supabase', icon: 'none' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    id: 'cloud',
    icon: <Cloud size={20} />,
    items: [
      { name: 'Azure', icon: 'azure' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Linux', icon: 'linux' }
    ]
  },
  {
    category: 'Core Development',
    id: 'dev',
    icon: <Code2 size={20} />,
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Flask', icon: 'flask' }
    ]
  }
]

const educationData = [
  {
    date: '2023 — Present',
    title: "Bachelor's in Artificial Intelligence",
    institution: 'FAST-NUCES, Islamabad',
    description:
      'Coursework in machine learning, deep learning, NLP, computer vision and software engineering. Independent work in RAG pipelines and agentic systems.'
  }
]

const experienceData = [
  {
    date: 'Jan 2026 — Present',
    title: 'Lab Demonstrator',
    company: 'FAST-NUCES, Islamabad',
    description:
      'Supporting undergraduates through programming labs — walking students through debugging, code reviews and core CS concepts.',
    current: false
  },
  {
    date: 'Jun 2025 — Sep 2025',
    title: 'AI Intern',
    company: 'Software Productivity Strategists Inc.',
    description:
      'Worked on LLM pipelines and deployed optimized ML models for real-time applications. Built retrieval-augmented features in production.'
  }
]

const HuggingFaceIcon = () => (
  <span className="skill-logo brand-icon">🤗</span>
)

const SkillIcon: FC<{ icon: string; name: string }> = ({ icon, name }) => {
  const [error, setError] = useState(false)

  if (icon === 'huggingface') {
    return <HuggingFaceIcon />
  }

  if (icon === 'none' || error) {
    return <div className="skill-dot-mini" />
  }

  // Special cases for different devicon formats if needed
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`

  return (
    <img
      className="skill-logo"
      src={iconUrl}
      alt={name}
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}

const About: FC<AboutProps> = ({ isActive, onNavClick }) => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  const eduRef = useRef<HTMLButtonElement>(null)
  const expRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const activeRef = activeTab === 'education' ? eduRef : expRef
    if (activeRef.current) {
      setIndicatorStyle({
        left: activeRef.current.offsetLeft,
        width: activeRef.current.offsetWidth
      })
    }
  }, [activeTab, isActive]) // Recalculate on tab change OR when section becomes active

  return (
    <section className={`about-section ${isActive ? 'active' : ''}`} id="about">
      <div className="container">
        {/* Skills - High-Density Grid Experiment */}
        <div className="about-block">
          <h3 className="block-h">Skills</h3>

          <div className="density-grid">
            {skillsCategories.map((group) => (
              <div key={group.id} className="density-column">
                <div className="density-header">
                  <div className="density-icon-small">{group.icon}</div>
                  <h4>{group.category}</h4>
                </div>
                <div className="density-tags-grid">
                  {group.items.map(item => (
                    <div key={item.name} className="skill-item-mini">
                      <SkillIcon icon={item.icon} name={item.name} />
                      <span className="skill-name-mini">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs for Education & Experience */}
        <div className="about-block tabs-section">
          <div className="tabs-header">
            <button
              ref={eduRef}
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              ref={expRef}
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <div
              className="tab-indicator"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width
              }}
            />
          </div>

          <div className="tab-content-wrapper">
            {activeTab === 'education' ? (
              <div key="education" className="tab-content animate-in">
                <div className="timeline">
                  {educationData.map((e, i) => (
                    <div key={i} className="t-item">
                      <div className="date">{e.date}</div>
                      <div>
                        <h4>
                          {e.title} <span className="sub">— {e.institution}</span>
                        </h4>
                        <p>{e.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div key="experience" className="tab-content animate-in">
                <div className="timeline">
                  {experienceData.map((x, i) => (
                    <div key={i} className="t-item">
                      <div className="date">{x.date}</div>
                      <div>
                        <h4>
                          {x.title} <span className="sub">— {x.company}</span>
                          {x.current && (
                            <span className="pill"><span className="d" /> Current</span>
                          )}
                        </h4>
                        <p>{x.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="about-cta">
            <a className="btn" href="/Muhammad_Hamza_Resume.pdf" target="_blank" rel="noreferrer">
              Download CV <span className="arrow">↓</span>
            </a>
            <button className="link" onClick={() => onNavClick('contact')}>
              Get in touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
