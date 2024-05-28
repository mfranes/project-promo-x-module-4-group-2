import '../styles/Button.scss';
//import postData from "../services/postData"

const Button = ({data, postData, addNewProject}) => {

    const handleClick = (ev) => {
        ev.preventDefault()
        // setData({...data, image:"", photo:""}) - falta pasar props!
        postData(data)
        addNewProject()
    }

  return (
    <button className="button--large" onClick={handleClick}>Guardar proyecto</button>
  )
}

export default Button