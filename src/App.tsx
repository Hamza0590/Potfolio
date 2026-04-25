import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Research from './components/Research'
import PageLoader from './components/PageLoader'
import './App.css'

type Theme = 'light' | 'dark'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = window.localStorage.getItem('theme') as Theme | null
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('hide-scrolling', showPopup)
  }, [showPopup])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { window.localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  const handleNavClick = (sectionId: string) => {
    if (sectionId === activeSection) return
    setActiveSection(sectionId)
    window.scrollTo(0, 0)
  }

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <PageLoader isLoading={isLoading} />

      {showPopup && (
        <div className="overlay active" onClick={() => setShowPopup(false)} />
      )}

      <Header
        activeSection={activeSection}
        onNavClick={handleNavClick}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className="main">
        <Home
          isActive={activeSection === 'home'}
          onNavClick={handleNavClick}
        />
        <About
          isActive={activeSection === 'about'}
          onNavClick={handleNavClick}
        />
        <Portfolio isActive={activeSection === 'portfolio'} />
        <Research  isActive={activeSection === 'research'} />
        <Contact   isActive={activeSection === 'contact'} />
      </div>
    </>
  )
}

export default App
