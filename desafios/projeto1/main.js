var data = new Date 
<<<<<<< HEAD
var ano = data.getFullYear()

function verificar () {
    var fano = document.getElementById('nas')
    var finalano=Number(fano.value)
    var res = document.getElementById('res')
    var idade =ano - finalano
    var img = document.createElement('img')
    img.setAttribute('id','img')
    if ()
    img.setAttribute('src','img/adulta.png')
    res.innerHTML = `sua idade é ${idade} <br>`
    res.appendChild(img)
    res.style.textAlign='center'

}
=======
var anoAtual = data.getFullYear()
function verificar() {

    var ano = document.getElementById('nas')
    var idade = anoAtual - Number(ano.value)
    var sexo = document.getElementsByName('sexo')
    var genero = ''
    var res = document.getElementById('res')
    var foto = document.createElement('img')
    foto.setAttribute('id','foto')
    if (idade>=anoAtual || idade<=0) {
        alert('ERRO! DATA INVALIDA ')

    }else {
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=10) {
                //criança
                foto.setAttribute('src','img/menino.png')
            
            }else if (idade >=10 && idade <18) {
                //jovem
                foto.setAttribute('src','img/jovem-m.png')
            }else if (idade >= 18 && idade< 50) {
                // adulto 
                foto.setAttribute('src','img/adulto.png')
            }else {
                //idoso
                foto.setAttribute('src','img/idoso.png')
            }


            }else {
                genero='Mulher'
                if (idade >=0 && idade <10) {
                    //criança
                    foto.setAttribute('src','img/menina.png')
                }else if (idade >=10 && idade <18) {
                    //jovem
                    foto.setAttribute('src','img/jovem.png')
                }else if (idade >= 18 && idade< 50) {
                    // adulto 
                    foto.setAttribute('src','img/adulta.png')
                }else {
                    //idoso
                    foto.setAttribute('src','img/idosa.png')
                }
            }
        res.style.textAlign='center'
        res.innerHTML=`Foi detectado ${genero} com ${idade} anos <br>`
        res.appendChild(foto)
        }
    }
>>>>>>> e0c21f70ab76977ba6d723e120fafb8d673f685a
