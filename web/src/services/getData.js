
function getData() {
    return fetch(import.meta.env.VITE_URL+'/getprojects')
        .then(response => response.json())
        .then(info => {
            return info.data;
        })
}

export default getData