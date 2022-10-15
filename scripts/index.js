async function home(){

    let url = 'https://dog.ceo/dog-api/documentation/'
   const recievedData = await fetch(url)
    .then(res => res.json())
    .catch(err => err.message)
    
    
}
