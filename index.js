// Code your solutions in this file
function writeCards(array, event){
    let arr = [];
    for (var i = 0; i<array.length;i++){
         arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

function countDown(n){
    //let x = 0;
while (n >= 0) {
  console.log(n--);
}
}
