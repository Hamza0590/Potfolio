import { FC } from 'react'
import './Home.css'

interface HomeProps {
  isActive: boolean
  onNavClick: (sectionId: string) => void
}

const Home: FC<HomeProps> = ({ isActive, onNavClick }) => {
  return (
    <section className={`home-section align-items-center ${isActive ? 'active' : ''}`} id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello, I'm</p>
            <h1>John Developer</h1>
            <h2>Full Stack Web Developer</h2>
            <button 
              className="btn"
              onClick={() => onNavClick('about')}
            >
              About Me
            </button>
            <button 
              className="btn"
              onClick={() => onNavClick('portfolio')}
            >
              Portfolio
            </button>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src="/img/profile-img.png" alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
