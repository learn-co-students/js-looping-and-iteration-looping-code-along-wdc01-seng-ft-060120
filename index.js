// Code your solutions in this file
function writeCards(names,event) {
    let i = 0;
    let array = [];
    while (i < names.length){
         array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
         i++
    }
    return array
    
}

function countDown(count){
    while (count > -1){
        console.log(count--);
    }   
    return count
};