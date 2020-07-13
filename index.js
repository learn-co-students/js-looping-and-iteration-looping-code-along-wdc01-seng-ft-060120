function writeCards(arrayOfNames, event_name){
    let array = []
    for(let i = 0; i < arrayOfNames.length; i++) {
        array.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event_name} gift!`);
    }
    return array;
}

function countDown(positiveNumber) {
    let i = positiveNumber;

    while (i > -1) {
        console.log(i);
        i -= 1;
    }
}
