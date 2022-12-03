var img = document.querySelector("#lampada")
var fun = document.querySelector("#fundo")
var al = document.querySelector("#aviso")

img.addEventListener('click', ativar) 
img.addEventListener('dblclick', broken) 
function ativar () {

    if(img.className == "lampadaOff"){
    img.src = "img/lampOn.png"
    fun.style.backgroundImage = 'radial-gradient(at 50% 50%, #3A3A01, #000217)'
    img.className = "lampadaOn"}

    else if(img.className == "lampadaOn"){
    img.src = "img/lampOff.png"
    fun.style.backgroundImage = 'radial-gradient(at 50% 50%, #000217, #020115)'
    img.className = "lampadaOff"}}

function broken (){
    img.src = "img/lampBrk.png"
    fun.style.backgroundImage = 'radial-gradient(at 50% 50%, #000217, #020115)'
    al.innerHTML = 'Ops, parece que você quebrou a lâmpada! Reinicie e tente novamente.'
    fun.style.height = '400px'
    img.className = "lampadaBrk"

}

