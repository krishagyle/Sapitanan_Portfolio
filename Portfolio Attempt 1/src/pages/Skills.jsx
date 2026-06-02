function Skills() {
  return (
    <section className="skills">
      <h2 className="heading">My <span>Skills</span></h2>

      <div className="skills-container">
        {/* Technical Skills */}
        <div className="skill-category">
          <h3><i className="fa-solid fa-code"></i> Technical Skills</h3>
          <div className="skill-list">
            <div className="skill-item">
              <span className="skill-name">Backend Development</span>
              <span className="skill-tech">Node.js, Python, C#</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Programming Languages</span>
              <span className="skill-tech">Python, C#, C, JavaScript/Node.js, Java (basics)</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Mobile Development</span>
              <span className="skill-tech">Android (Java)</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Databases</span>
              <span className="skill-tech">MySQL, Firebase, XAMPP (PHP + Apache + MySQL)</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Version Control</span>
              <span className="skill-tech">Git &amp; GitHub</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Tools</span>
              <span className="skill-tech">VS Code, Android Studio, phpMyAdmin</span>
            </div>
          </div>
        </div>

        {/* Project Management */}
        <div className="skill-category">
          <h3><i className="fa-solid fa-list-check"></i> Project Management &amp; Processes</h3>
          <div className="skill-list">
            <div className="skill-item">
              <span className="skill-name">Project Planning</span>
              <span className="skill-tech">Task estimation &amp; prioritization</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Collaboration</span>
              <span className="skill-tech">Team collaboration &amp; remote work</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Time Management</span>
              <span className="skill-tech">Meeting deadlines &amp; efficient workflow</span>
            </div>
          </div>
        </div>

        {/* Documentation & Communication */}
        <div className="skill-category">
          <h3><i className="fa-solid fa-file-lines"></i> Documentation &amp; Communication</h3>
          <div className="skill-list">
            <div className="skill-item">
              <span className="skill-name">Technical Documentation</span>
              <span className="skill-tech">READMEs, API docs, user guides</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Project Reports</span>
              <span className="skill-tech">Meeting notes &amp; progress updates</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Communication</span>
              <span className="skill-tech">Clear written and verbal communication</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Microsoft Office Suite</span>
              <span className="skill-tech">Word, Excel, PowerPoint</span>
            </div>
          </div>
        </div>

        {/* Professional & Soft Skills */}
        <div className="skill-category">
          <h3><i className="fa-solid fa-user-tie"></i> Professional &amp; Soft Skills</h3>
          <div className="skill-list">
            <div className="skill-item">
              <span className="skill-name">Adaptability</span>
              <span className="skill-tech">Highly adaptable &amp; flexible with changing priorities</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Teamwork</span>
              <span className="skill-tech">Strong teamwork and cross-functional collaboration</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Active Listening</span>
              <span className="skill-tech">Active listening &amp; emotional intelligence</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Quick Learner</span>
              <span className="skill-tech">Quick learner in new environments and technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
