var atualData = new Date ()
var anoAtual= atualData.getFullYear()
console.log(anoAtual)
 var genero = ""
function verificar () {
    var nascimento = document.querySelector('#nas')
    var imga = document.querySelector('#img')
    var sexo= document.getElementsByName('sexo')
    console.log(sexo)
    nas=Number(nascimento.value)
    var idade = anoAtual - nas
    console.log(idade)
    img.innerHTML=`a idade é ${idade}`
    if (sexo[0].checked){
        imga.src
        console.log('macho')
    }else if (sexo[1].checked) {
        console.log('mulher')
    }

    
}
