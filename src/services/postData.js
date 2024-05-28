const postData = (data) => {

    return fetch('//dev.adalab.es/api/projectCard', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(dataResponse => {
            console.log(dataResponse);
            if(dataResponse.success){
                // console.log(dataResponse.cardURL)
                return dataResponse.cardURL
                
             }
             else {
                return "Asegúrate de haber rellenado todos los campos"
             }
    
        })
}

export default postData;