
function getData() {
    return fetch('//localhost:3001/getprojects')
        .then(response => response.json())
        .then(info => {
            return info.data;
        })
}

export default getData