import { useState } from 'react';

const ValidateUrl = () => {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const validateInput = () => {
        const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9._-]*)*\/?$/;
        if (!urlPattern.test(inputValue)) {
            setErrorMessage('Please enter a valid GitHub URL in the format https://github.com/username');
        } else {
            setErrorMessage('');
            // Proceed with form submission or other logic
            console.log('Valid GitHub URL:', inputValue);
        }
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub URL"
                />
                <button type="button" onClick={validateInput}>
                    Submit
                </button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default ValidateUrl;
