let counter = 0;
const getSuggestions = async() => {
    //Calls API to get Data
    let breedname = document.getElementById("inputSearch").value

    const searchData = await fetch(`https://dog.ceo/api/breed/${breedname}/images`)
    .then(res => res.json())
    // const myImage = new Image(100, 200);
// myImage.src = 'picture.jpg';
document.body.appendChild(searchData);
tbody.append(searchData)

    
    
    // console.log("Fetching Data...", counter++);
}
