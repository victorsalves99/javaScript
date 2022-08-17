lista=[]
let num = document.querySelector('#num')
let list = document.querySelector('#lista') 
let adicionaNum = document.querySelector('#adicionar')
let finalizar = document.querySelector('#analisar')
adicionaNum.addEventListener('click',adicionar)

function adicionar(){
    let item = document.createElement('option')
    item.text=`o valor  ${num.value} foi adicionado`
    list.appendChild(item)
}