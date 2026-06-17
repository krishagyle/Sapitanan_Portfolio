import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <div className="home-img">
        <img src="/PortfolioProfile.jpg" alt="Krisha Gyle - Portfolio Profile" />
      </div>
      <div className="home-content">
        <h1>Hi, It&apos;s <span>Krisha!</span></h1>
        <h3 className="typing-text">I&apos;m a <span></span></h3>
        <p>
          With a solid foundation in database management and hands-on experience across technologies such as C#, Python, Node.js, XML, HTML, and CSS, I bring a versatile skill set to every project I take on. Rooted in backend development, I am now expanding my horizons into the world of UI/UX and Frontend Development — driven by a genuine curiosity to craft seamless user experiences. I am also an aspiring Data Analyst, fueled by a deep passion for uncovering insights and turning raw data into meaningful stories. While I am still refining my skills in this space, my eagerness to grow and my ability to learn quickly make me a dedicated and adaptable professional, ready to embrace new challenges head-on.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sapitanan-krisha-gyle-c-912527315" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/krishagyle" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="#" aria-label="X / Twitter"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
        </div>
        <Link to="/contact" className="btn">Hire me</Link>
      </div>
    </section>
  )
}

export default Home
