import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import PageLoader from './components/PageLoader'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <PageLoader isLoading={isLoading} />

      <div className="bg-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
      </div>

      <div className="main">
        <Header
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />

        <Home
          isActive={activeSection === 'home'}
          onNavClick={handleNavClick}
        />

        <About
          isActive={activeSection === 'about'}
          onNavClick={handleNavClick}
        />

        <Portfolio
          isActive={activeSection === 'portfolio'}
        />

        <Contact
          isActive={activeSection === 'contact'}
        />
      </div>
    </>
  )
}

export default App
