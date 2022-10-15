async function home(){

  
    let url='https://dog.ceo/dog-api/documentation/'
   const data = await fetch(url)
    .then(res => res.json())
    .catch(err => err.message)
    let chandu=document.getElementById("chandu")
    chandu.append(data)
    
            button.addEventListener("click", function myFunction(){
                localStorage.setItem("single", JSON.stringify(element))
                console.log("clicked")
            })
           
            chandu.append(data)
       
}
