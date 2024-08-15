var agora = new Date()
var h = agora.getHours()
var m = agora.getMinutes()
console.log(`Agora são ${h}h${m}.`)

if (h < 12){
    console.log('Bom dia flor do dia!')
}else if(h <= 18){
    console.log('Boa tarde flor de jade')
}else{
    console.log('Boa noite flor da noite')
}