import { FC } from 'react'
import './Contact.css'

interface ContactProps {
  isActive: boolean
}

const Contact: FC<ContactProps> = ({ isActive }) => {
  return (
    <section className={`contact-section sec-padding ${isActive ? 'active' : ''}`} id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:hamza35502@gmail.com">hamza35502@gmail.com</a>
              </p>
            </div>
            <div className="contact-info-item">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
