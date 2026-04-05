import { FC } from 'react'
import './Header.css'

interface HeaderProps {
  activeSection: string
  onNavClick: (sectionId: string) => void
}

const navItems = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'research',  label: 'Research' },
  { id: 'contact',   label: 'Contact' },
]

const Header: FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  return (
    <header className="top-navbar">
      <div className="top-navbar-inner">
        <span className="top-navbar-logo">MH</span>
        <nav>
          <ul className="top-nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`top-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => onNavClick(item.id)}
                >
                  {item.label}
                  <span className="nav-underline" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
