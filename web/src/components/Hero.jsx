import { Link } from "react-router-dom";
import "../styles/Hero.scss";
import logoPS from '../images/logo_simple.svg';


const Hero = ({text, link}) => {
  return (
    <section className="hero">
        {/* <h2 className="title">Project Sphere</h2> */}
        <img src={logoPS} alt="logo PS" className="hero__logo"/>
        <p className="hero__text">Get inspired and share your projects</p>
        <Link className="button--link" to={link}>{text}</Link>
      </section>
  )
}

export default Hero