import { Link } from "react-router-dom";
import "../styles/Hero.scss";

const Hero = ({text, link}) => {
  return (
    <section className="hero">
        <h2 className="title">Project Sphere</h2>
        <p className="hero__text">Get inspired and share your projects</p>
        <Link className="button--link" to={link}>{text}</Link>
      </section>
  )
}

export default Hero