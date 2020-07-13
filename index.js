// Code your solutions in this file
function writeCards(array, eventname) {
    let tyCards = []
        for (let i = 0; i < array.length; i++) {
            tyCards.push(`Thank you, ${array[i]}, for the wonderful ${eventname} gift!`)
        }
    return tyCards
}

function countDown(number) {
        while(number > 0) {
            console.log(number);
            number--;
        }
        // to account for 0
        console.log(number);
}