import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Research from './components/Research'
import PageLoader from './components/PageLoader'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('hide-scrolling', showPopup)
  }, [showPopup])

  const handleNavClick = (sectionId: string) => {
    if (sectionId === activeSection) return
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

      {showPopup && (
        <div className="overlay active" onClick={() => setShowPopup(false)} />
      )}

      {/* .main is the single white card — navbar lives at the top of it */}
      <div className="main">
        <Header activeSection={activeSection} onNavClick={handleNavClick} />

        <Home
          isActive={activeSection === 'home'}
          onNavClick={handleNavClick}
        //canGoBack={canGoBack}
        //onBack={handleBack}
        />
        <About
          isActive={activeSection === 'about'}
          onNavClick={handleNavClick}
        />
        <Portfolio
          isActive={activeSection === 'portfolio'}
        />
        <Research
          isActive={activeSection === 'research'}
        />
        <Contact
          isActive={activeSection === 'contact'}
        />
      </div>

    </>
  )
}

export default App