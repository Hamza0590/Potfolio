import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import PortfolioPopup from './components/PortfolioPopup'
import PageLoader from './components/PageLoader'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [navOpen, setNavOpen] = useState(false)
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<any>(null)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('hide-scrolling', navOpen || showPopup)
  }, [navOpen, showPopup])

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setNavOpen(false)
    // Scroll to top to show the new section
    window.scrollTo(0, 0)
  }

  const handlePortfolioItemClick = (item: any) => {
    setSelectedPortfolioItem(item)
    setShowPopup(true)
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

      <div className={`overlay ${navOpen || showPopup ? 'active' : ''}`}></div>

      <div className="main">
        <Header 
          navOpen={navOpen} 
          setNavOpen={setNavOpen}
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
          onPortfolioClick={handlePortfolioItemClick}
        />

        <Contact 
          isActive={activeSection === 'contact'}
        />
      </div>

      {selectedPortfolioItem && (
        <PortfolioPopup
          isOpen={showPopup}
          item={selectedPortfolioItem}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  )
}

export default App
