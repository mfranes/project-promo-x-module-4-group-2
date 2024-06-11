import '../styles/Button.scss';
import PropTypes from 'prop-types';

const Button = ({sendData}) => {

    const handleClick = (ev) => {
        ev.preventDefault();
        sendData();
    }

    return (
        <button className="button--large" onClick={handleClick}>Save Project</button>
    )
}


// Validamos las props que le vienen al componente
Button.propTypes = {
    data: PropTypes.object,
    setCardURL: PropTypes.func,
    errorMsg: PropTypes.object
};

export default Button