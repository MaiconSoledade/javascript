function contar(){
var ini = document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')
if( ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
    window.alert('[ERRO] falta dados!')
    res.innerHTML = 'Impossivel contar!'
}else {
   res.innerHTML = 'Contando:... <br>'
   var i = Number(ini.value)
   var f = Number(fim.value)
   var p = Number(passo.value)
   if( p <= 0){
       window.alert('Passo invalido! Considerando passo 1')
       p = 1
   }
   if(i < f){
       // contagem crescente 
    for( var c = i; c <=f; c+= p){
        res.innerHTML += ` ${c} \u{1F449}`
    }
    res.innerHTML += `\u{1f3c1}`
   }else {
       //contagem decrescente
    for (var c = i; c >=f; c -= p){
        res.innerHTML += ` ${c} \u{1F448}`
    }
    res.innerHTML += `\u{1f3c1}`
   }
  
}
}