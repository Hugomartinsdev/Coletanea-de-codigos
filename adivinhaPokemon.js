//tentar colocar o nome dos pokemon em uma matriz para quando forem escretos os nomes  
//poder dizer sé é um numero da pokedex maior ou menor(continuar tentando isso para diminuir linhas)
//se não eu so coloco ife if else com o s numeros da pokedex deles como fixz com o invesaur
var s1
function sortea(){
s1=Math.floor(Math.random()*9+1)
alert(s1)
}
function adivinha(params) {
    var p1/*(sorteio dos numeros*/,p2/*(acerta os nomes)*/,p3/*(chute da pessoa)*/
    p1=s1
    t1=[10]
    t1[0]="acerola"
    t1[1]="laranja"
    
    t1[3]="amaca"
    t1[4]="abacate"
    t1[5]="tornaja"
    t1[5]="tamgerina"
    t1[6]="pure"
    t1[7]="alface"
    t1[8]="tudo"
    t1[10]="green"
    switch (p1) {
        case 1:
            p2="bulbassauro"
            break;
        case 2:
            p2="ivyssauro"
            break;
        case 3:
            p2="venossauro"
            t1[2]="banana"
            break;
        case 4:
            p2="charmander"
            break;
        case 5:
            p2="charmeleon"
            break;
        case 6:
            p2="charizard"
            break;
        case 7:
            p2="squirtle"
            break;
        case 8:
            p2="wartortle"
            break;
        case 9:
            p2="blastoise"
            break;
        case 10:
            p2="cartepie"
            break;
        case 11:
            p2="metapod"
             break;
        case 12:
            p2="butterfree"
            break;
        case 13:
            p2="weedle"
            break;
        case 14:
            p2="kakuna"
            break;
        case 15:
            p2="beedril"
            break;
        case 16:
            p2="pidgey"
            break;
        case 17:
            p2="pidgeotto"
            break;
        case 18:
            p2="pidgeot"
            break;
        case 19:
            p2="rattata"
            break;
        case 20:
            p2="raticate"
            break;
        case 21:
            p2="spearow"
            break;
        case 22:
            p2="fearow"
            break;
        case 23:
            p2="ekans"
            break;
        case 24:
            p2="arbok"
            break;
        case 25:
            p2="pikachu"
            break;
        case 26:
            p2="raichu"
            break;
        case 27:
            p2="sandsherew"
            break;
        case 28:
            p2="sandslash"
            break;
        case 29:
            p2="nidoranF"//talvez na resposta aceita o simbolo e na resposta da imagem colocar o simbolo
            break;
        case 30:
            p2="nidorina"
            break;
        case 31:
            p2="nidoqueen"
            break;
        case 32:
            p2="nidoranM"//talvez na resposta aceita o simbolo e na resposta da imagem colocar o simbolo
            break;
        case 33:
            p2="nidorino"
            break;
        case 34:
            p2="nidoking"
            break;
        case 35:
            p2="clefairy"
            break;
        case 36:
            p2="clefable"
            break;
        case 37:
            p2="vulpix"
            break;
        case 38:
            p2="ninetales"
            break;
        case 39:
            p2="jigglypuff"
            break;
        case 40:
            p2="wigglypuff"
            break;
        case 41:
            p2="zubat"
            break;
        case 42:
            p2="golbat"
            break;
        case 43:
            p2="oddish"
            break;
        case 44:
            p2="gloom"
            break;
        case 45:
            p2="vileplume"
            break;
        case 46:
            p2="paras"
            break;
        case 47:
            p2="parasect"
            break;
        case 48:
            p2="venonat"
            break;
        case 49:
            p2="venomoth"
            break;
        case 50:
            p2="diglett"
            break;
        case 51:
            p2="dugtrio"
            break;
        case 52:
            p2="meowth"
            break;
        case 53:
            p2="persian"
            break;
        case 54:
            p2="psyduck"
            break;
        case 55:
            p2="golduck"
            break;
        case 56:
            p2="mankey"
            break;
        case 57:
            p2="primeape"
            break;
        case 58:
            p2="growlithe"
            break;
        case 59:
            p2="arcanine"
            break;
        case 60:
            p2="poliwag"
            break;
        case 61:
            p2="poliwhirl"
            break;
        case 62:
            p2="poliwrath"
            break;        
            p2="abra"
            break;        
            p2="kadabra"
            break;
        case 65:
            p2="alakazam"
            break;
        case 66:
            p2="machop"
            break;
        case 67:
            p2="machoke"
            break;
        case 68:
            p2="machamp"
            break;
        case 69:
            p2="bellsprout"
            break;
        case 70:
            p2="weepinbell"
            break;
        case 71:
            p2="victreebel"
            break;
        case 72:
            p2="tentacool"
            break;
        case 73:
            p2="tentacruel"
            break;
        case 74:
            p2="geodude"
            break;
        case 75:
            p2="graveler"
            break;
        case 76:
            p2="golem"
            break;
        case 77:
            p2="ponyta"
            break;
        case 78:
            p2="rapidash"
            break;
        case 79:
            p2="slowpoke"
            break;
        case 80:
            p2="slowbro"
            break;
        case 81:
            p2="magnemite"
            break;
        case 82:
            p2="magneton"
            break;
        case 83:
            p2="farfetch´d"
            break;
        case 84:
            p2="doduo"
            break;
        case 85:
            p2="dodrio"
            break;
        case 86:
            p2="seel"
            break;
        case 87:
            p2="dewgong"
            break;
        case 88:
            p2="grimer"
            break;
        case 89:
            p2="muk"
            break;
        case 90:
            p2="shellder"
            break;
        case 91:
            p2="cloyter"
            break;
        case 92:
            p2="gastly"
            break;
        case 93:
            p2="haunter"
            break;
        case 94:
            p2="gengar"
            break;
        case 95:
            p2="onix"
            break;
        case 96:
            p2="drowzee"
            break;
        case 97:
            p2="hypno"
            break;
        case 98:
            p2="krabby"
            break;
        case 99:
            p2="kingler"
            break;
        case 100:
            p2="voltorb"
            break;
        case 101:
            p2="electrode"
            break;
        case 102:
            p2="exeggcute"
            break;
        case 103:
            p2="exeggutor"
            break;
        case 104:
            p2="cubone"
            break;
        case 105:
            p2="marowak"
            break;
        case 106:
            p2="hitmonlee"
            break;
        case 107:
            p2="hitmonchan"
            break;
        case 108:
            p2="lickitung"
            break;
        case 109:
            p2="koffing"
            break;
        case 110:
            p2="weezing"
            break;
        case 111:
            p2="rhyhorn"
            break;
        case 112:
            p2="rhydon"
            break;
        case 113:
            p2="chansey"
            break;
        case 114:
            p2="tangela"
            break;
        case 115:
            p2="kangaskhan"
            break;
        case 116:
            p2="horsea"
            break;
        case 117:
            p2="seadra"
            break;
        case 118:
            p2="goldeen"
            break;
        case 119:
            p2="seaking"
            break;
        case 120:
            p2="staryu"
            break;
        case 121:
            p2="starmie"
            break;
        case 122:
            p2="mr.mime"
            break;
        case 123:
            p2="scyther"
            break;
        case 124:
            p2="jynx"
            break;
        case 125:
            p2="electabuzz"
            break;
        case 126:
            p2="magmar"
            break;
        case 127:
            p2="pinsir"
            break;
        case 128:
            p2="tauros"
            break;
        case 129:
            p2="magikarp"
            break;
        case 130:
            p2="gyarados"
            break;
        case 131:
            p2="lapras"
            break;
        case 132:
            p2="ditto"
            break;
        case 133:
            p2="eevee"
            break;
        case 134:
            p2="vaporeon"
            break;
        case 135:
            p2="jolteon"
            break;
        case 136:
            p2="flareon"
            break;
        case 137:
            p2="porygon"
            break;
        case 138:
            p2="omanyte"
            break;
        case 139:
            p2="omastar"
            break;
        case 140:
            p2="kabuto"
            break;
        case 141:
            p2="kabutops"
            break;
        case 142:
            p2="aerodactyl"
            break;
        case 143:
            p2="snorlax"
            break;
        case 144:
            p2="articuno"
            break;
        case 145:
            p2="zapdos"
            break;
        case 146:
            p2="moltres"
            break;
        case 147:
            p2="dratini"
            break;
        case 148:
            p2="dragonair"
            break;
        case 149:
            p2="dragonite"
            break;
        case 150:
            p2="mewtwo"
            break;
        case 151:
            p2="mew"
            break;
    }
    p3=document.getElementById("ad").value
    switch (p2) {
        case"bulbassauro":
            if (p3==p2||p3==p1||p3=="bulbasur") {
                alert(t1[0])
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
        document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"}
        if (p3!=p2 && p3!=p1  ) {
            alert("você errou,o número na pokedex é menor")    
        }
                
            break;
        case "ivyssauro":
                if (p3==p2||p3==p1) {
                    alert(t1[1])
                alert("acertou")    
                document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
                document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"}
                
            break;
        case "venossauro":
            if (p3<3) {
                alert("nuemro é maior")
            }
            else if (p3>3) {
                alert("numero é menor")
            }else if(p3==3){
                alert("acertou o numero na pokedex agora escreva o nome dele")
            }
    
        if (p3==p2) {
        alert("acertou")
        alert(t1[2])
                document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"}
            break;
        case "charmander":
            if (p3==p2||p3==p1) {
        alert("acertou")
        alert(t1[3])
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"}
            break;
        case "charmeleon":
            if (p3==p2||p3==p1) {
        alert("acertou")
        alert(t1[4])
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"}
            break;
        case "charizard":
            if (p3==p2||p3==p1) {
        alert("acertou")
        alert(t1[5])
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"}
            break;
        case "squirtle":
            if (p3==p2||p3==p1) {
        alert("acertou")
        alert(t1[6])
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"}
            break;
        case "wartortle":
            if (p3==p2||p3==p1) {
        alert("acertou")
        alert(t1[7])
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"}
            break;
        case "blastoise":
            if (p3==p2||p3==p1) {
        alert("acertou")
        alert(t1[8])
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"}
            break;
        case "cartepie":
            if (p3==p2||p3==p1) {
        alert("acertou")
        alert(t1[9])
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png"}
            break;
        case "metapod":
            if (p3==p2||p3==p1) {
        alert("acertou")
        alert(t1[10])
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png"}
             break;
        case "butterfree":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png"}
            break;
        case "weedle" :
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png"}
            break;
        case "kakuna":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png"}
            break;
        case "beedril":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png"}
            break;
        case "pidgey":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
        document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png"}
            break;
        case "pidgeotto":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
        document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png"}
            break;
        case "pidgeot":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png"}
            break;
        case "rattata":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png"}
            break;
        case "raticate":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png"}
            break;
        case "spearow":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png"}
            break;
        case "fearow":    
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png"}
            break;
        case "ekans":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png"}
            break;
        case "arbok":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png"}
            break;
        case "pikachu":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"}
            break;
        case "raichu":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png"}
            break;
        case "sandsherew":     
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png"}
            break;
        case "sandslash":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png"}
            break;
        case "nidoranF":
            //talvez na resposta aceita o simbolo e na resposta da imagem colocar o simbolo
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o Nidoran♀!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png"}
            break;
        case "nidorina":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png"}
            break;
        case "nidoqueen":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png"}
            break;
        case "nidoranM":
            //talvez na resposta aceita o simbolo e na resposta da imagem colocar o simbolo
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o Nidoran♂!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png"}
            break;
        case "nidorino":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png"}
            break;
        case "nidoking":
                       
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png"}
            break;
        case "clefairy":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png"}
            break;
        case "clefable":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png"}
            break;
        case "vulpix":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png"}
            break;
        case "ninetales":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png"}
            break;
        case "jigglypuff":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png"}
            break;
        case "wigglypuff":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png"}
            break;
        case "zubat":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png"}
            break;
        case "golbat":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png"}
            break;
        case "oddish":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png"}
            break;
        case "gloom":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png"}
            break;
        case "vileplume":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png"}
            break;
        case "paras":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png"}
            break;
        case "parasect":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png"}
            break;
        case "venonat":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png"}
            break;
        case "venomoth":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png"}
            break;
        case "diglett":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png"}
            break;
        case "dugtrio":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png"}
            break;
        case "meowth":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png"}
            break;
        case "persian":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png"}
            break;
        case "psyduck":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png"}
            break;
        case "golduck":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png"}
            break;
        case "mankey":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png"}
            break;
        case "primeape":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png"}
            break;
        case "growlithe":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png"}
            break;
        case "arcanine":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png"}
            break;
        case "poliwag":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png"}
            break;
        case "poliwhirl":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png"}
            break;
        case "poliwrath":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png"}
            break;
        case "abra":      
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png"}
            break;
        case "kadabra":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png"}
            break;
        case "alakazam":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png"}
            break;
        case "machop":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png"}
            break;
        case "machoke":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png"}
            break;
        case "machamp":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png"}
            break;
        case "bellsprout":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png"}
            break;
        case "weepinbell":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png"}
            break;
        case "victreebel":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png"}
            break;
        case "tentacool":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png"}
            break;
        case "tentacruel":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png"}
            break;
        case "geodude":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png"}
            break;
        case "graveler":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png"}
            break;
        case "golem":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png"}
            break;
        case "ponyta":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png"}
            break;
        case "rapidash":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png"}
            break;
        case "slowpoke":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png"}
            break;
        case "slowbro":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png"}
            break;
        case "magnemite":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png"}
            break;
        case "magneton":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png"}
            break;
        case "farfetch´d":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png"}
            break;
        case "doduo":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png"}
            break;
        case "dodrio":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png"}
            break;
        case "seel":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png"}
            break;
        case "dewgong":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png"}
            break;
        case "grimer":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png"}
            break;
        case "muk":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png"}
            break;
        case "shellder":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png"}
            break;
        case "cloyter":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png"}
            break;
        case "gastly":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png"}
            break;
        case "haunter":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png"}
            break;
        case "gengar":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png"}
            break;
        case "onix":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png"}
            break;
        case "drowzee":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png"}
            break;
        case "hypno":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png"}
            break;
        case "krabby":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png"}
            break;
        case "kingler":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png"}
            break;
        case "voltorb":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png"}
            break;
        case "electrode":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png"}
            break;
        case "exeggcute":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/102.png"}
            break;
        case "exeggutor":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png"}
            break;
        case "cubone":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png"}
            break;
        case "marowak":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png"}
            break;
        case "hitmonlee":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png"}
            break;
        case "hitmonchan":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png"}
            break;
        case "lickitung":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/108.png"}
            break;
        case "koffing":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png"}
            break;
        case "weezing":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110.png"}
            break;
        case "rhyhorn":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png"}
            break;
        case "rhydon":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/112.png"}
            break;
        case "chansey":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png"}
            break;
        case "tangela":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/114.png"}
            break;
        case "kangaskhan":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/115.png"}
            break;
        case "horsea":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png"}
            break;
        case "seadra":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png"}
            break;
        case "goldeen":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/118.png"}
            break;
        case "seaking":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png"}
            break;
        case "staryu":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/120.png"}
            break;
        case "starmie":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/121.png"}
            break;
        case "mr.mime":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png"}
            break;
        case "scyther":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png"}
            break;
        case "jynx":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/124.png"}
            break;
        case "electabuzz":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png"}
            break;
        case "magmar":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png"}
            break;
        case "pinsir":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/127.png"}
            break;
        case "tauros":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128.png"}
            break;
        case "magikarp":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png"}
            break;
        case "gyarados":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png"}
            break;
        case "lapras":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/131.png"}
            break;
        case "ditto":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png"}
            break;
        case "eevee":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png"}
            break;
        case "vaporeon":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png"}
            break;
        case "jolteon":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png"}
            break;
        case "flareon":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png"}
            break;
        case "porygon":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png"}
            break;
        case "omanyte":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/138.png"}
            break;
        case "omastar":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/139.png"}
            break;
        case "kabuto":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/140.png"}
            break;
        case "kabutops":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/141.png"}
            break;
        case "aerodactyl":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/142.png"}
            break;
        case "snorlax":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png"}
            break;
        case "articuno":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png"}
            break;
        case "zapdos":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png"}
            break;
        case "moltres":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png"}
            break;
        case "dratini":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png"}
            break;
        case "dragonair":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png"}
            break;
        case "dragonite":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png"}
            break;
        case "mewtwo":
            
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
    document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png"}
            break;
        case "mew":
            if (p3==p2||p3==p1) {
        alert("acertou")
        document.getElementById("img").innerHTML="<b> É o "+p2+"!!!!<b>"
        document.getElementById("ip").src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png"
        }if (p3!=p2) {
            alert("você errou,o número na pokedex é menor")    
        }
            break;
    }
    /*if(p3<p1 && p3!="bulbassauro" && p3!="bulbasaur"){
        alert("você errou,o número é maior") 
    }else if(p3>p1){
        alert("você errou,o número é menor")
}*/
}
//futuramente acetar escrever o numero da pokedex tambem,e na resposta certa alem das imagens estatisticas e
// tamanho etc, comom uma pokedex
//futuramente colocar dicas tipo "éod tipo tall,taamnho,fraquesa etc"
//e fazer talvez que nem o monkepo ele errar os nomes mas se acertar o tipo mostra
