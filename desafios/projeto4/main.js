function gerar(){
    if (num.value==0){
        alert('campo vazio')
    }else{
        let num = document.querySelector('#num')
        let n = num.value
        console.log(n)
        let tab = document.querySelector('#taboada')
        tab.innerHTML=''
        for (var c=0 ; c<=10 ; c++){
            let item = document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            item.value=`tab${c}`
            tab.appendChild(item)
        }
    }
}