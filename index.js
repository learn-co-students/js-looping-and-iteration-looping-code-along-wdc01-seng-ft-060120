// Code your solutions in this file

function writeCards(gifters, holiday) {
    const array = []
    for (let i = 0; i < gifters.length; i++) {
        array.push(`Thank you, ${gifters[i]}, for the wonderful ${holiday} gift!`);
    };
    return array
};

function countDown(num) {
    
    while (num > -1) {
        console.log(num);
        num--;
    };


};
