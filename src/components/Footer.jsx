import logoAdalab from '../images/adalab.png';
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
        <img className="logoSponsor" src={logoAdalab}  alt="Logo Adalab"/>
    </footer>
  )
}

export default Footer
