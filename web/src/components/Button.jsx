import '../styles/Button.scss';
import postData from '../services/postData';
import PropTypes from 'prop-types';

const Button = ({data, setCardURL}) => {

    const handleClick = (ev) => {
        ev.preventDefault();
        postData(data).then((response) => {
            setCardURL(response.url)
            console.log(response);
        });
    }

    return (
        <button className="button--large" onClick={handleClick}>Save Project</button>
    )
}

Button.propTypes = {
    data: PropTypes.object,
    setCardURL: PropTypes.func
};

export default Button