function Projects() {
  return (
    <section className="projects">
      <h2 className="heading">My <span>Projects</span></h2>

      <div className="projects-container">

        {/* Project 1 - FarmerConnect */}
        <div className="project-card">
          <div className="project-icon">
            <i className="fa-solid fa-seedling"></i>
          </div>
          <div className="project-info">
            <div className="project-header">
              <h3>FarmerConnect</h3>
              <span className="project-date"><i className="fa-solid fa-calendar-days"></i> September 2025 – May 2026</span>
            </div>
            <p className="project-desc">
              This is a marketplace for farmers to directly sell to Local Buyers of Laguna without being dependent to middlemen.
            </p>
            <div className="project-video-container">
              <iframe 
                src="https://drive.google.com/file/d/1YWNUr4KzUV0OHWKkctor5LiRRJYGUwTA/preview" 
                allow="autoplay" 
                title="FarmerConnect Demo Video"
              ></iframe>
            </div>
            <div className="project-links">
              <a href="https://canva.link/78cp5qm7ygmjvpm" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fa-solid fa-book"></i> Farmer User Manual
              </a>
              <a href="https://canva.link/2vp00mv3ci990dj" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fa-solid fa-book"></i> Consumer User Manual
              </a>
            </div>
            <div className="project-tags">
              <span className="tag">Marketplace</span>
              <span className="tag">Agriculture</span>
              <span className="tag">E-Commerce</span>
            </div>
          </div>
        </div>

        {/* Project 2 - STAR Scanner */}
        <div className="project-card">
          <div className="project-icon">
            <i className="fa-solid fa-qrcode"></i>
          </div>
          <div className="project-info">
            <div className="project-header">
              <h3>STAR Scanner</h3>
              <span className="project-date"><i className="fa-solid fa-calendar-days"></i> February 2026 – April 2026</span>
            </div>
            <p className="project-desc">
              This application was developed to help teachers check students' answer sheets more efficiently. By using the ZPH Paper format, the system can automatically evaluate students' answers, calculate their scores, and display the results instantly.
            </p>
            <div className="project-tags">
              <span className="tag">Education</span>
              <span className="tag">Automation</span>
              <span className="tag">Scanner</span>
            </div>
          </div>
        </div>

        {/* Project 3 - JobSyncra */}
        <div className="project-card">
          <div className="project-icon">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <div className="project-info">
            <div className="project-header">
              <h3>JobSyncra</h3>
              <span className="project-date"><i className="fa-solid fa-calendar-days"></i> February 2025 – June 2025</span>
            </div>
            <p className="project-desc">
              This web-based system helps fresh graduates identify jobs that best match their qualifications using their resumes. Users can upload or paste their resumes, which the system analyzes to determine their skills and qualifications. It then presents the top three job opportunities most suitable for them and recommends relevant courses to help further develop their skills and enhance their career prospects.
            </p>
            <div className="project-tags">
              <span className="tag">Web App</span>
              <span className="tag">AI/ML</span>
              <span className="tag">Career</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
