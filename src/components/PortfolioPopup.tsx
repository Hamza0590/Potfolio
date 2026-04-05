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

interface PortfolioPopupProps {
  isOpen: boolean
  item: PortfolioItem
  onClose: () => void
}

const PortfolioPopup: FC<PortfolioPopupProps> = ({ isOpen, item, onClose }) => {
  return (
    <div className={`portfolio-popup ${isOpen ? 'open' : ''}`}>
      <div className="pp-inner" onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}>
        <div className="pp-content">
          <div className="pp-header">
            <button 
              type="button" 
              className="btn pp-close"
              onClick={onClose}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="pp-thumbnail">
              <img src={item.image} alt="project-thumbnail" />
            </div>
            <h3>{item.title}</h3>
          </div>
          <div className="pp-body">
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
      </div>
    </div>
  )
}

export default PortfolioPopup
