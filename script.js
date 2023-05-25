var desligarClick = 0
var brilho = 100
var tela = document.getElementById("tela")
var home = document.getElementById("home")
function ligar(){
    tela.style.transition = "0.3s ease-in-out"
    desligarClick ++
    if(desligarClick %2 === 1){
        brilho = 100
        tela.style.filter = `brightness(${brilho}%)`
        tela.style.overflow = "scroll"
    }
    else{
        brilho = 0
        tela.style.filter = `brightness(${brilho}%)`
        tela.style.overflow = "hidden"
    }
    
}

function clicar(){
    window.alert(nomes[3].dataset.item)
}


function mais(){
    brilho += 10
    tela.style.filter = `brightness(${brilho}%)`
}
function menos(){
    brilho -= 10
    tela.style.filter = `brightness(${brilho}%)`
}

