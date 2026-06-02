import { Link } from 'react-router-dom'

function Services() {
  return (
    <section className="services">
      <h2 className="heading">My <span>Services</span></h2>

      <div className="services-container">
        <div className="service-box">
          <i className="fa-solid fa-code"></i>
          <h3>Web &amp; Software Development</h3>
          <p>Custom web applications, RESTful API development, and backend solutions using Node.js, Python, and C#. Responsive design with HTML, CSS, and JavaScript for seamless user experiences.</p>
        </div>

        <div className="service-box">
          <i className="fa-solid fa-mobile-screen"></i>
          <h3>Mobile App Development</h3>
          <p>Native Android application development using Java. Creating intuitive, mobile-first solutions tailored to your business needs with clean code and efficient performance.</p>
        </div>

        <div className="service-box">
          <i className="fa-solid fa-database"></i>
          <h3>Data Management &amp; Analysis</h3>
          <p>Database design and management with MySQL and Firebase. Data encoding, validation, and organization. Spreadsheet automation and basic data analysis to turn raw data into insights.</p>
        </div>

        <div className="service-box">
          <i className="fa-solid fa-file-lines"></i>
          <h3>Technical Documentation</h3>
          <p>Comprehensive technical documentation including API docs, user guides, README files, and project reports. Clear communication of complex technical concepts for diverse audiences.</p>
        </div>

        <div className="service-box">
          <i className="fa-solid fa-list-check"></i>
          <h3>Project Management</h3>
          <p>Project planning, task estimation, and team collaboration. Effective time management, progress tracking, and meeting facilitation to ensure successful project delivery.</p>
        </div>

        <div className="service-box">
          <i className="fa-solid fa-briefcase"></i>
          <h3>Administrative &amp; Digital Services</h3>
          <p>Virtual assistant services, digital filing, document processing, and records management. Proficient with Microsoft Office Suite for professional business solutions.</p>
        </div>
      </div>

      <Link to="/contact" className="btn">Contact Me</Link>
    </section>
  )
}

export default Services
