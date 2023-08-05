var e,x,a
function criar(){
a=document.getElementById("tam").value
for (let i = 1; i <= a; i++){
        x= " ".repeat(a - i)//repeat é uma função que repete a string original repetindo ela com a quantidade especificada. 
        e=document.getElementById("tipo").value.repeat(2 * i - 1)        
document.getElementById("ip").innerHTML+=x+e+"<br>"
}

//MODELO SEM REPEAT,SO COM LACO DE REPETIÇÃO
/*for (let i = 1; i <= a; i++) {
  x=" "
  e=" "
  for (let j = 0; j  <= a-i; j++) {
    x+=" "
  }for (let index = 1; index <= 2*i-1; index++) {
    e+=document.getElementById("tipo").value
}
document.getElementById("p").innerHTML+=x+e+"<br>"}*/
}
function invertida() {
var e,x,a
a=document.getElementById("tam").value
for (let index = a; index > 0; index--) {
  x=" ".repeat(a-index);
  e=document.getElementById("tipo").value.repeat(2 * index - 1);
  document.getElementById("ip").innerHTML+=x+e+"<br>";
}

// MODELO SEM REPEAT, SO COM LAÇO DE REPTIÇÃO
/*for (let i = a; i > 0; i--) {
  x = '';
  e = '';  
  for (let j = 0; j < a - i; j++) {
  x += ' ';
  }
      
    for (let k = 0; k < 2 * i - 1; k++) {
      e=document.getElementById("tipo").value
    }      
document.getElementById("ip").innerHTML+=x+e+"<br>"
}*/     
}      
function apagar(params) {
        document.getElementById("p").innerHTML=" "
        document.getElementById("ip").innerHTML=" "
        document.getElementById("tipo").value=" "
        document.getElementById("tam").value=" "
}

