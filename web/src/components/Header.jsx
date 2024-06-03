import logoPS from '../images/projectsphere_logo.svg';
import laptop from '../images/laptop-code-solid.svg';
import "../styles/Header.scss"
import { useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation();

  return (
    <header className={location.pathname === '/projectdetail' ? 'hidden' : 'header'}>
      <a className="header__brand" href="./" title="Click to return to home page">
        <img className="header__companyLogo" src={laptop} alt="Logo D.D."/>
        <h1 className="header__title">Desarrolladoras Desquiciadas</h1>
      </a>
      <img className="logoSponsor" src={logoPS}  alt="Project Sphere Logo"/>
    </header>
  )
}

export default Header