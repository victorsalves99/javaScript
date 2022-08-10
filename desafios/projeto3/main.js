function contar() {
    var inicio =document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)
    if (passo==0){
        alert('PASSO NÃO PREECHIDO SERA CONTADO COMO 1 !')
        passo=1
    }
    if (inicio==0||fim==0) {
        alert('ERRO! Pencha os dados coretramente')
    }else{
        res.innerHTML='contando: <br>'
        if (inicio<fim){
            //CONTAGEM CRECENTE
            for (inicio;inicio<=fim;inicio+=passo){
                res.innerHTML+=` ${inicio}  \u{1F449}`
            }
        }else{
            //CONTAGEM REGRECIVA 
            for (inicio;inicio>=fim;inicio-=passo){
                res.innerHTML+= ` ${inicio}  \u{1F449}`
            }
        }
        res.innerHTML+=`\u{1F3C1}`
    }
}