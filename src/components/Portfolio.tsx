import { FC } from 'react'

interface PortfolioItem {
  id: number
  title: string
  image: string
  description: string
  technologies: string
  role: string
  link: string
  created: string
}

interface PortfolioProps {
  isActive: boolean
  onPortfolioClick: (item: PortfolioItem) => void
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    image: '/img/portfolio/1.jpg',
    description: 'A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management and payment integration.',
    technologies: 'React, Node.js, MongoDB',
    role: 'Full Stack Developer',
    link: 'https://github.com',
    created: '04/15/2023'
  },
  {
    id: 2,
    title: 'Task Management App',
    image: '/img/portfolio/2.jpg',
    description: 'Collaborative task management application with real-time updates, user authentication, and team management features.',
    technologies: 'React, Firebase, TypeScript',
    role: 'Frontend Developer',
    link: 'https://github.com',
    created: '03/10/2023'
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    image: '/img/portfolio/3.jpg',
    description: 'Interactive analytics dashboard providing real-time insights and data visualization for business metrics.',
    technologies: 'React, D3.js, Python',
    role: 'Developer',
    link: 'https://github.com',
    created: '02/20/2023'
  },
  {
    id: 4,
    title: 'Social Network',
    image: '/img/portfolio/4.jpg',
    description: 'Social networking platform with messaging, notifications, and user profile management capabilities.',
    technologies: 'React, Express, PostgreSQL',
    role: 'Full Stack Developer',
    link: 'https://github.com',
    created: '01/05/2023'
  },
  {
    id: 5,
    title: 'Weather Application',
    image: '/img/portfolio/5.jpg',
    description: 'Real-time weather application integrating multiple weather APIs with location detection and forecast features.',
    technologies: 'React, OpenWeather API',
    role: 'Frontend Developer',
    link: 'https://github.com',
    created: '12/15/2022'
  },
  {
    id: 6,
    title: 'Blog Platform',
    image: '/img/portfolio/6.jpg',
    description: 'Content management system for blogging with markdown support, categories, and SEO optimization.',
    technologies: 'Next.js, TypeScript, Supabase',
    role: 'Full Stack Developer',
    link: 'https://github.com',
    created: '11/30/2022'
  }
]

const Portfolio: FC<PortfolioProps> = ({ isActive, onPortfolioClick }) => {
  return (
    <section className={`portfolio-section sec-padding ${isActive ? 'active' : ''}`} id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Recent Work</h2>
          </div>
        </div>
        <div className="row">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-item-thumbnail">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="portfolio-item-title">{item.title}</h3>
              <button 
                type="button" 
                className="btn view-project-btn"
                onClick={() => onPortfolioClick(item)}
              >
                View Project
              </button>
              <div className="portfolio-item-details" style={{ display: 'none' }}>
                <div className="description">
                  <p>{item.description}</p>
                </div>
                <div className="general-info">
                  <ul>
                    <li>Created - <span>{item.created}</span></li>
                    <li>Technology - <span>{item.technologies}</span></li>
                    <li>Role - <span>{item.role}</span></li>
                    <li>Learn More - <span><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></span></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
