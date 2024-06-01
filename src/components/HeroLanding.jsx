import { Link } from "react-router-dom";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
        <h2 className="title">Proyect Sphere</h2>
        <p className="hero__text">Get inspired and share your projects</p>
        <Link to="/createproject" className="button--link">New project</Link>
      </section>
  )
}

export default Hero