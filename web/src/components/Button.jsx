import '../styles/Button.scss';
import postData from "../services/postData";
//import postData from "../services/postData"

const Button = ({data}) => {

    const handleClick = (ev) => {
        ev.preventDefault()
        // setData({...data, image:"", photo:""}) - falta pasar props!
        postData(data);
        
    }

  return (
    <button className="button--large" onClick={handleClick}>Save Project</button>
  )
}

export default Button