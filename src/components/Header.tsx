import { FC } from 'react'
import './Header.css'

interface HeaderProps {
  activeSection: string
  onNavClick: (sectionId: string) => void
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const navItems = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'research',  label: 'Research' },
  { id: 'contact',   label: 'Contact' },
]

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
)

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const Header: FC<HeaderProps> = ({ activeSection, onNavClick, theme, onToggleTheme }) => {
  return (
    <header className="top-navbar">
      <div className="top-navbar-inner">
        <div className="top-navbar-logo">
          <span className="logo-dot" />
          <span className="logo-name">Muhammad Hamza</span>
          <span className="logo-mono">AI / ML</span>
        </div>
        <nav className="top-nav-right">
          <ul className="top-nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`top-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => onNavClick(item.id)}
                >
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
