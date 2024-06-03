import logoPS from '../images/logo_simple.svg';
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
      <div className='header__dayNightMode'>
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
      </div>
    </header>
  )
}

export default Header