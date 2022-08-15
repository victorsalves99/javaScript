function gerar(){
    let num = document.querySelector('#num')
    let n = num.value
    console.log(n)
    let tab = document.querySelector('#taboada')
    tab.innerHTML=''
    for (var c=0 ; c<=10 ; c++){
        let item = document.createElement('option')
        item.text=`${n} x ${c} = ${n*c}`
        tab.appendChild(item)
    }
}