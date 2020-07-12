// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan']
function writeCards(names,birthday) {
    let arrOfMessages = []; 
    for(let i=0; i<names.length;i++){ 
    arrOfMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`) }
    return arrOfMessages
} 


function countDown(n) {
    
    while(n>=0){console.log(n--)}
}
