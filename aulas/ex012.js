var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora} horas`)
if (hora>=1 && hora <12) {
    console.log('tenha um bom dia')
}else if  (hora>=12 && hora <17) {
    console.log('tenha uma boa tarde ')
}else if (hora >=17 && hora<24){
    console.log('tenha uma boa noite ') 
}