import { NavLink, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <>
      {/* Desktop Header */}
      <header>
        <NavLink to="/" className="logo">
          My Portfolio
        </NavLink>

        <nav id="navbar">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
            Services
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>
            Skills
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>
            Education
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>
            Experience
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </nav>
      </header>

      {/* Mobile Bottom Taskbar */}
      <nav className="mobile-bottom-bar">
        <NavLink to="/" end className={({ isActive }) => `bottom-bar-item ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => `bottom-bar-item ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-briefcase"></i>
          <span>Services</span>
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => `bottom-bar-item ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-code"></i>
          <span>Skills</span>
        </NavLink>
        <NavLink to="/education" className={({ isActive }) => `bottom-bar-item ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-graduation-cap"></i>
          <span>Education</span>
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => `bottom-bar-item ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-chart-line"></i>
          <span>Experience</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `bottom-bar-item ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-folder-open"></i>
          <span>Projects</span>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `bottom-bar-item ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-envelope"></i>
          <span>Contact</span>
        </NavLink>
      </nav>
    </>
  )
}

export default Header
