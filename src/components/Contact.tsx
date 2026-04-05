import { FC, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

interface ContactProps {
  isActive: boolean
}

const Contact: FC<ContactProps> = ({ isActive }) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setIsSending(true)
    setFeedback(null)

    // Replace these placeholders with your actual IDs from the EmailJS dashboard
    const SERVICE_ID = 'service_r6gks3w'
    const TEMPLATE_ID = 'template_na05ocm'
    const PUBLIC_KEY = 'iY4DxgZdxMaSas-Hm'

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setFeedback({
          type: 'success',
          message: 'Message has been sent successfully. Thankyou for the message.'
        })
        formRef.current?.reset()
      })
      .catch((error) => {
        setFeedback({
          type: 'error',
          message: 'Oops! Something went wrong. Please try again later.'
        })
        console.error('EmailJS Error:', error)
      })
      .finally(() => {
        setIsSending(false)
      })
  }

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

            <div className="contact-form">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="input-group">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="input-control"
                    required
                  ></textarea>
                </div>

                {feedback && (
                  <div className={`form-feedback ${feedback.type}`}>
                    {feedback.message}
                  </div>
                )}

                <div className="submit-btn">
                  <button
                    type="submit"
                    className="btn"
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

