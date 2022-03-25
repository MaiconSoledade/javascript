/* var agora = new Date()
var hora = agora.getHours() caso quisesse deixar a hora atual do nosso relogio seria essa confg ai*/
var hora = 18
console.log(`Agora é exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
}else if( hora >=12 && hora <18)
{
    console.log('Boa tarde!')
}else ( hora >=18)
{
    console.log('Boa noite!')
}