import logoAdalab from '../images/adalab.png';
import logoPS from '../images/projectsphere_logo.svg';
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
        <img className="logoSponsor" src={logoPS}  alt="Logo Project Sphere"/>
    </footer>
  )
}

export default Footer
