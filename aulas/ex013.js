var agora = new Date()
var diasem = agora.getDay()
console.log(diasem)
switch (diasem){
    case 0 :
        console.log('tenha um bom domingo')
        break
    case 1 :
        console.log('tenha uma boa segunda')
        break

    case 2 :
        console.log('tenha uma boa terca')
        break

    case 3 :
        console.log('tenha uma boa quarta')
        break

    case 4 :
        console.log('tenha uma boa quinta')
        break

    case 5 :
        console.log('tenha uma boa sexta')
        break

    case 6 :
        console.log('tenha um bom sabado')
        break
    default :
        console.log('Erro')
}