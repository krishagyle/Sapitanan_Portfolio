import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current &&
        menuRef.current &&
        !navRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleMenu = (e) => {
    e.stopPropagation()
    setMenuOpen((prev) => !prev)
  }

  return (
    <header>
      <NavLink to="/" className="logo">
        Project Portfolio
      </NavLink>

      {/* Hamburger Menu Icon */}
      <div
        id="menu-icon"
        ref={menuRef}
        className={menuOpen ? 'active' : ''}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav
        id="navbar"
        ref={navRef}
        className={menuOpen ? 'active' : ''}
        onClick={(e) => e.stopPropagation()}
      >
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
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
