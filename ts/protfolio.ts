// let num = 0
// let demo = document.getElementById('demo')
// function change (){

// }
// demo.addEventListener('click' , )
 
fetch ('https://jsonplaceholder.typicode.com/posts')
.then((response) =>{
    return response.json()
} )
.then((response) =>{
    let el = document.getElementById('body')
    const title = document.createElement('h2')
    title.textContent = response.title
    const text = document.createElement('p')
    text.textContent = response.body
    el.appendChild(title)
    el.appendChild(text)

})
.catch((error) =>{
    console.error(error)
})