import { FC } from 'react'

interface HeaderProps {
  navOpen: boolean
  setNavOpen: (open: boolean) => void
  activeSection: string
  onNavClick: (sectionId: string) => void
}

const Header: FC<HeaderProps> = ({ navOpen, setNavOpen, onNavClick }) => {
  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      const sectionId = href.replace('#', '')
      onNavClick(sectionId)
    }
  }

  return (
    <header className={`header ${navOpen ? 'active' : ''}`}>
      <div className="container">
        <div className="row flex-end">
          <button 
            type="button" 
            className="nav-toggler"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span></span>
          </button>
          <div className="nav">
            <div className="nav-inner">
              <ul>
                <li>
                  <a 
                    href="#home" 
                    className="nav-item link-item"
                    onClick={handleNavItemClick}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="nav-item link-item"
                    onClick={handleNavItemClick}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#portfolio" 
                    className="nav-item link-item"
                    onClick={handleNavItemClick}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="nav-item link-item"
                    onClick={handleNavItemClick}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
