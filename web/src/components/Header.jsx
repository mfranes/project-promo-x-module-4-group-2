import laptop from '../images/laptop-code-solid.svg';
import "../styles/Header.scss"
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation();

  return (
    <header className={location.pathname === '/projectdetail' ? 'hidden' : 'header'}>
      <a className="header__brand" href="./" title="Click to return to home page">
        <img className="header__companyLogo" src={laptop} alt="Logo D.D."/>
        <h1 className="header__title">Desarrolladoras Desquiciadas</h1>
      </a>
      {/* <div className='header__dayNightMode'>
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
      </div> */}
      <nav><ul><Link className="header__ul" to="/signup">Sign up</Link>
      <li>Login</li>
      <li>User</li></ul></nav>
    </header>
  )
}

export default Header