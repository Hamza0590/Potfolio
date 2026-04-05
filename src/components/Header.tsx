import { FC } from 'react'
import './Header.css'

interface HeaderProps {
  navOpen?: boolean
  setNavOpen?: (open: boolean) => void
  activeSection: string
  onNavClick: (sectionId: string) => void
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

const Header: FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  return (
    <nav className="top-navbar">
      <div className="top-navbar-inner">
        <span className="top-navbar-logo">PORTFOLIO</span>
        <ul className="top-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`top-nav-link${activeSection === item.id ? ' active' : ''}`}
                onClick={() => onNavClick(item.id)}
              >
                {item.label}
                <span className="nav-underline" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
