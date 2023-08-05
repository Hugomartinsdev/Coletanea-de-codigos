var n
function tabela(params) {
var l,c,matriz=[
    [],[],[],
    [],[],[],
    [],[],[]
],x,y,t
l=document.getElementById("linha").value
c=document.getElementById("coluna").value
n=document.getElementById("nome").value


for ( x = 0; x < l; x++) {
    for ( y = 0; y < c; y++) {
        matriz[[x],[y]]=n
        document.getElementById("tabela").innerHTML+=matriz[[x],[y]]+" "
        }
        document.getElementById("tabela").innerHTML+="<br>"
}
}
function ale(params) {
    var l,c,matriz=[
        [],[],[],
        [],[],[],
        [],[],[]
    ],x,y,t
    l=document.getElementById("linha").value
    c=document.getElementById("coluna").value
    n=document.getElementById("nome").value
    
    
    for ( x = 0; x < l; x++) {
        for ( y = 0; y < c; y++) {
            t=sorte(n)
            matriz[[x],[y]]=t
            document.getElementById("tabela").innerHTML+=matriz[[x],[y]]+" "
            }
            document.getElementById("tabela").innerHTML+="<br>"
    }
}
function sorte(){

 var a,no
 a=no
 no=document.getElementById("nome").value
    a=Math.floor(Math.random()*no.length)
    return no[a]
    
}
function apagar(){
    var a=" ",b=" ",c=" ",d=" "
    document.getElementById("tabela").innerHTML=a
    document.getElementById("linha").value=b
    document.getElementById("coluna").value=c
    document.getElementById("nome").value=d
}