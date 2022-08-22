var lista=[]
let num = document.querySelector('#num')
let list = document.querySelector('#lista') 
let adicionaNum = document.querySelector('#adicionar')
let analizar = document.querySelector('#analisar')
let res = document.querySelector('#resposta')
let maior=0
let menor=0
let soma=0
let media=0
adicionaNum.addEventListener('click',adicionar)
analizar.addEventListener('click', finalizar)


function adicionar(){
    let verificador = lista.indexOf(Number(num.value))
    console.log(verificador)
    if (num.value>=0 && num.value<=100 && verificador==-1){
            let item = document.createElement('option')
            item.text=`o valor  ${num.value} foi adicionado`
            list.appendChild(item)
            lista.push(Number(num.value))
            
    }else {
        alert('erro')
    }
    num.value=""
    res.innerHTML=''
    
}
function finalizar(){
    for (var c in lista){
        if (c==0){
            maior=lista[c]
            menor=lista[c]
            soma=lista[c]
        }else {
            if (lista[c]>maior){
                maior=lista[c]
            }
            if(lista[c]<menor){
                menor=lista[c]
            }
            soma+=lista[c]
        }
    }
    media=soma/lista.length


    res.innerHTML=(`<p>Ao todo, temos ${lista.length} números cadastrados</p>`)
    res.innerHTML+=(`<p>O maior numero informado foi ${maior}</p> `)
    res.innerHTML+=(`<p>O menor numero informado foi ${menor}</p> `)
    res.innerHTML+=(`<p>Somando todos os numeros , temos ${soma}</p>`)
    res.innerHTML+=(`<p>A media dos valores digitados é ${media}</p>`)


}