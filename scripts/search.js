let counter = 0;
const get = async() => {
    
    let breedname = document.getElementById("inputSearch").value

  
    const search= await fetch(`https://dog.ceo/api/breed/${breedname}/images`)
    .then(res => res.json())

     let chandu=document.getElementById("chandu")
     chandu.append(search)
    
}
