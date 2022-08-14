var data = new Date 
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