let numero = 0 

function add () {
    numero++
    render()
}
function diminuir () {
    numero--
    render()    
}
function render () {
    document.querySelector("p").innerHTML = numero
}
render()