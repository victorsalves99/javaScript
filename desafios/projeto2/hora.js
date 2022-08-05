var data = new Date()
var hora = data.getHours()

function entrar() {
    var horario = document.getElementById('per')
    var img = document.getElementById('imagem')
    if (hora >=5 && hora < 12){
        horario.innerHTML=`São ${hora} horas da manhã!`
        img.src='img/dia.jpg'
        document.body.style.backgroundColor='#d4e371'
        console.log(hora)
        console.log(horario)
    }else if (hora >=12 && hora<18) {
        horario.innerHTML = `São ${hora} horas da tarde! `
        img.src='img/tarde.jpg'
        document.body.style.backgroundColor='#A9714C'
    }else{
        horario.innerHTML = `São ${hora} horas da noite!`
        img.src='img/noite.jpg'
        document.body.style.backgroundColor='#0063A1'
    }
}