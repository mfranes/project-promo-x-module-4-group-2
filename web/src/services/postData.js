const postData = (data) => {

    return fetch('//localhost:3001/newproject', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(dataResponse => {
            console.log('fetch', dataResponse);
            return dataResponse;
        })
}

export default postData;