alert("tem um extra fora do codigo")
alert("para uma experiencia melhor aperte f11")
function mudar(){
    var c1,s
    c1=document.getElementById("cor").value
    document.getElementById("cb").style=`background-color:${c1}`
    switch (c1) {
        case "blue":
            s=document.getElementById("musica")
            document.getElementById("img").src="https://2.bp.blogspot.com/-AcdTUBpi7qA/VwaeBKK38-I/AAAAAAAAK_A/lUU0M9F2FyknRFDLq1LjWhHfFJ_fZInnw/s320/natacao%2Bpotiguar%2Bdemo%2Bsaida%2Bde%2Bcostas%2B1.gif"
            document.getElementById("musica").src="audios/take your marks.mpeg"
            document.getElementById("img").style.width="1300px"
            document.getElementById("img").style.height="530px"
            setTimeout(() => {  
                s.play()
                }, 1000);
            break;
        case "red":
            document.getElementById("img").src="https://www.infoescola.com/wp-content/uploads/2012/02/foice-martelo.jpg"
            document.getElementById("musica").src="audios/unnião sovietica.mpeg"
            document.getElementById("img").style.width="1350px"
            document.getElementById("img").style.height="500px"
            document.getElementById("musica").play()
            break;
        case "yellow":
            document.getElementById("img").src="https://i.gifer.com/Td9n.gif"
            document.getElementById("musica").src="audios/pikachu.mpeg"
            document.getElementById("img").style.width="1000px"
            document.getElementById("img").style.height="530px"
            document.getElementById("musica").play()
            break;
        case "green":
            document.getElementById("img").src="https://media.tenor.com/ECoxfxlj0FYAAAAi/luigi-mario-party.gif"
            document.getElementById("musica").src="audios/it´s luigi time.mpeg"
            document.getElementById("img").style.width="1000px"
            document.getElementById("img").style.height="500px"
            document.getElementById("musica").play()
            break;
        case "purple":
            document.getElementById("img").src="https://64.media.tumblr.com/d4bfb410412df689e6115fc8f04d5997/tumblr_p0lte63LvC1vszt01o1_1280.gif"
            document.getElementById("musica").src="audios/i always come back.mpeg"
            document.getElementById("img").style.width="1350px"
            document.getElementById("img").style.height="530px"
            document.getElementById("musica").play()
            break;
    }
}
function mudar2(){
    var c2
    c2=document.getElementById("cor2").value
    document.getElementById("cb").style=`background-color:${c2}`
    // so titrar o que está em observação no HTML
}