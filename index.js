// Code your solutions in this file

function writeCards(array, event) {
    const emptyArray = []
    for (let i=0; i<array.length; i++){
        emptyArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        console.log(i)
    }
    return emptyArray;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}