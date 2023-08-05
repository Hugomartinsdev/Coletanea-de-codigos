function cal(){
var a
a=document.getElementById("op").value
switch (a) {
    case "ad":
        mais()
        break;
    case"sub":
        menos()
        break;
    case"mul":
        multiplicacao()
        break;
    case"div":
        divisao()
        break;
    case"rq":
        raizquadrada()
    break;
    case "pot":
        potencia()
    break;
}}
function mais(){
    var a,b,c
    a=document.getElementById("n1").value
    b=document.getElementById("n2").value
    a=parseFloat(a)
    b=parseFloat(b)
    c=a+b
    document.getElementById("resultado").innerHTML=c
}
function menos(){
    var a,b,c
    a=document.getElementById("n1").value
    b=document.getElementById("n2").value
    a=parseFloat(a)
    b=parseFloat(b)
    c=a-b
    document.getElementById("resultado").innerHTML=c
}
function multiplicacao(){
    var a,b,c
    a=document.getElementById("n1").value
    b=document.getElementById("n2").value
    a=parseFloat(a)
    b=parseFloat(b)
    c=a*b
    document.getElementById("resultado").innerHTML=c
}
function divisao(){
    var a,b,c
    a=document.getElementById("n1").value
    b=document.getElementById("n2").value
    a=parseFloat(a)
    b=parseFloat(b)
    c=a/b
    document.getElementById("resultado").innerHTML=c
}
function raizquadrada(){
    var a,c
    a=document.getElementById("n1").value
    a=parseFloat(a)
    c=Math.sqrt(a)
    document.getElementById("resultado").innerHTML=c
}
function potencia(){
    var a,c
    a=document.getElementById("n1").value
    a=parseFloat(a)
    c=a*a
    document.getElementById("resultado").innerHTML=c
}