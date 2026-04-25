import { FC } from 'react'
import './Home.css'

interface HomeProps {
  isActive: boolean
  onNavClick: (sectionId: string) => void
}

const Home: FC<HomeProps> = ({ isActive, onNavClick }) => {
  return (
    <section className={`home-section ${isActive ? 'active' : ''}`} id="home">
      <div className="container">
        <div className="home-grid">
          <div className="home-main">
            <span className="eyebrow">Portfolio / 2026</span>
            <h1 className="home-display">
              Muhammad<br />
              <span className="it">Hamza.</span>
            </h1>
            <div className="home-role">
              AI / ML Engineer
              <span className="sep">—</span>
              Islamabad, PK
            </div>

            <p className="home-intro">
              AI student focused on building retrieval-augmented and agentic systems,
              with hands-on experience in LLM pipelines, NLP, and deploying optimized
              ML models for real-time applications.
            </p>

            <div className="home-ctas">
              <button className="btn" onClick={() => onNavClick('about')}>
                About me <span className="arrow">↗</span>
              </button>
              <button className="link" onClick={() => onNavClick('portfolio')}>
                See selected work →
              </button>
              <a className="link" href="/Muhammad_Hamza_Resume.pdf" target="_blank" rel="noreferrer">
                Download CV ↓
              </a>
            </div>
          </div>

          <div className="home-aside">
            <div className="portrait">
              <img src="/img/profile_white.png" alt="Muhammad Hamza" />
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Home
