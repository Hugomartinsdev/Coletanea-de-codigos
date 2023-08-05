alert("use o f11 para uma experiencia melhor")
var nf
function sortea(){
    var ns=Math.floor(Math.random()*999+1)
    nf=ns
    return nf    
}
function adivinhe(){
var ne
ne=document.getElementById("ne").value
if (ne==nf) {
    alert("Parabéns")
    document.getElementById("txt").innerHTML=`<b>Parabens voce acertou o número era ${nf} !!!<b>`
    document.getElementById("img").src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/bd/Personagens_de_Gravity_Falls.png/260px-Personagens_de_Gravity_Falls.png"
}else if(ne<nf){
    alert("você errou,o número é maior") 
}else if(ne>nf){
    alert("você errou,o número é menor")
}
}
function apagar(){
    document.getElementById("txt").innerHTML=" "
    document.getElementById("img").src=" "
    document.getElementById("ne").value=" "
}