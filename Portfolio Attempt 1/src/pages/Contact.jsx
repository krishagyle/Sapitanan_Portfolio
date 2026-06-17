import { useState, useRef } from 'react'
import Toast, { useToast } from '../components/Toast'

// ============================================================
// WEB3FORMS SETUP — Only 1 step needed!
//
// 1. Go to https://web3forms.com/
// 2. Enter your email (krishagyle18@gmail.com) and click "Create Access Key"
// 3. Check your email inbox for the access key
// 4. Paste the access key below (replace "YOUR_ACCESS_KEY_HERE"):
// ============================================================

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function Contact() {
  const [sending, setSending] = useState(false)
  const formRef = useRef(null)
  const { toast, showToast, hideToast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const formData = new FormData(formRef.current)

    // Build the payload for Web3Forms
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "Portfolio Message",
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (result.success) {
        showToast("Message sent successfully! I'll get back to you soon.", true)
        formRef.current.reset()
      } else {
        throw new Error(result.message || 'Submission failed')
      }
    } catch (error) {
      console.error('Form Error:', error)
      showToast('Failed to send message. Please try again or email me directly.', false)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Toast
        message={toast.message}
        isSuccess={toast.isSuccess}
        visible={toast.visible}
        onHide={hideToast}
      />

      <section className="contact">
        <h2 className="heading">Contact <span>Me</span></h2>

        <div className="contact-container">
          {/* Contact Info Cards */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-text">
                <h4>Address</h4>
                <p>Block 4 Lot 5 Villa Rosalina Homes, Brgy. Gatid, Santa Cruz, Laguna, Philippines</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p><a href="mailto:krishagyle18@gmail.com">krishagyle18@gmail.com</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <p><a href="tel:+639763542741">+63 976 354 2741</a></p>
                <p><a href="tel:+639567619909">+63 956 761 9909</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="info-text">
                <h4>University</h4>
                <p>Laguna University</p>
                <p className="sub-text">BS Computer Science – Data Science</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/sapitanan-krisha-gyle-c-912527315" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/krishagyle" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="#" title="X / Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/krishagyle.04/" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/krishagyle" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Me a <span>Message</span></h3>
            <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" placeholder="Your first name" required />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Your last name" required />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="btn submit-btn" id="submitBtn" disabled={sending}>
                <i className={sending ? 'fa-solid fa-spinner fa-spin' : 'fa-solid fa-paper-plane'}></i>
                <span id="btnText">{sending ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
