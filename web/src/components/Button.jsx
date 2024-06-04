import '../styles/Button.scss';
import postData from "../services/postData";
//import postData from "../services/postData"

const Button = ({data, resetData}) => {

    const handleClick = (ev) => {
        ev.preventDefault()
        // setData({...data, image:"", photo:""}) - falta pasar props!
        postData(data);
        resetData();
        
    }

  return (
    <button className="button--large" onClick={handleClick}>Save Project</button>
  )
}

export default Button