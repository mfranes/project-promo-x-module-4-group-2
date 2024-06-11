import '../styles/Button.scss';
import postData from '../services/postData';
import PropTypes from 'prop-types';

const Button = ({data, setCardURL, errorMsg}) => {

    const handleClick = (ev) => {
        ev.preventDefault();

        if (isDataValidated(data, errorMsg)) {
            postData(data).then((response) => {
                setCardURL(response.url)
                console.log(response);
            });
        }
    }

    return (
        <button className="button--large" onClick={handleClick}>Save Project</button>
    )
}

// funcion que revisa si hay errores en algun campo del form
const isDataValidated = (data, errors) => {
    let isValidated = true;

    // Valida datos completos
    for (let key in data) {
        if ((key !== 'image' && key !== 'photo') && data[key] === '') {  // Si el campo esta vacio (sin las fotos)
            console.log(`campo vacio -> ${key}`);
            isValidated = false;
            break; // Deja de iterar porque encontró un error
        }
    }

    for (let key in errors) {
        if (errors[key]) {  // Si el id del campo tiene valor, o sea un error
            console.log(`error validacion -> ${key} - ${errors[key]}`);
            isValidated = false;
            break; // Deja de iterar porque encontró un error
        }
    }

    return isValidated; // Retorna si hay errores o no
}

// Validamos las props que le vienen al componente
Button.propTypes = {
    data: PropTypes.object,
    setCardURL: PropTypes.func,
    errorMsg: PropTypes.object
};

export default Button