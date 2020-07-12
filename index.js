// Code your solutions in this file
// const names = ["Ada", "Brendan", "Ali"];
// const event = "birthday";

function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}

function countDown(num){
    while ( num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
}



    // let count = 10;
    // while (count >= 0) {
    //     console.log (countdown--);
    // }