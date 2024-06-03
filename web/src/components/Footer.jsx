import { useLocation } from 'react-router-dom';
import logoAdalab from '../images/adalab.png';
import logoPS from '../images/projectsphere_logo.svg';
import "../styles/Footer.scss";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className={location.pathname === '/projectdetail' ? 'hidden' : 'footer'}>
        <img className="logoSponsor" src={logoPS}  alt="Logo Project Sphere"/>
    </footer>
  )
}

export default Footer
