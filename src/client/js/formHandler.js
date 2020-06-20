async function handleSubmit ( event ) {
    event.preventDefault()

    // check what text was put into the form field
    const text = document.querySelector( '#name' ).value
    
    const getBtn = document.querySelector( '#submitIt' )
    //disable button
    getBtn.disabled = true

    //remove the attribute after 

    console.log( "::: Form Submitted :::", text )

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify( { text, });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    };


    try {
        fetch("http://localhost:8081/test", requestOptions)
        .then(response => response.json())
            .then( result => {
                console.log( result )
                Client.updateUi(result)
            })
        .catch(error => console.log('error', error));
    } catch (error) {
        console.log(error)
    }
    
    // button
    setTimeout( () => {
        getBtn.disabled = false
    }, 1000)
    
}

export { handleSubmit }
