var atualData = new Date ()
var anoAtual= atualData.getFullYear()
console.log(anoAtual)
 var genero = ""
function verificar () {
    var nascimento = document.querySelector('#nas')
    var res = document.querySelector('#res')
    var sexo= document.getElementsByName('sexo')
    nas=Number(nascimento.value)
    var idade = anoAtual - nas
    var foto = document.createElement('img')
    foto.setAttribute('id','foto')
    
    res.innerHTML=`a idade é ${idade}`
    if (sexo[0].checked){
        console.log('macho')
        fot.setAttribute('src','img/idosa.png')
        res.style.textAlign = 'center'
    }else if (sexo[1].checked) {
        console.log('mulher')
        res.style.textAlign = 'center'
        foto.setAttribute('src','img/adulta.png')


    }

    
}
