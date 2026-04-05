import { FC, useState } from 'react'

interface AboutProps {
  isActive: boolean
  onNavClick: (sectionId: string) => void
}

const skillsData = [
  'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'
]

const educationData = [
  {
    date: '2018 - 2022',
    title: 'B.Tech Computer Science',
    institution: 'Tech University',
    description: 'Studied computer science with focus on web technologies and software engineering'
  },
  {
    date: '2016 - 2018',
    title: 'Diploma in Information Technology',
    institution: 'Community College',
    description: 'Foundation courses in IT and web development basics'
  }
]

const experienceData = [
  {
    date: '2022 - Present',
    title: 'Senior Developer',
    company: 'Tech Solutions Inc',
    description: 'Leading frontend development team using React and modern web technologies'
  },
  {
    date: '2021 - 2022',
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Developed and maintained web applications using MERN stack'
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
              I am a passionate and skilled full-stack developer with expertise in modern web technologies. 
              I specialize in building responsive, user-friendly web applications using React, TypeScript, and Node.js. 
              With a strong foundation in computer science and continuous learning mindset, I stay updated with the latest 
              industry trends and best practices in software development.
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

            <a href="/cv.pdf" target="_blank" className="btn">Download CV</a>
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
