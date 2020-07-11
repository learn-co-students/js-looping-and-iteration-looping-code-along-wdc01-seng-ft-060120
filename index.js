// Code your solutions in this file

function writeCards(ppl, event) {
  let arr = [];
  for(let i = 0; i < ppl.length; i++) {
    arr.push(`Thank you, ${ppl[i]}, for the wonderful ${event} gift!`)
  }
  return arr
}

function countDown(n) {
  while (n >= 0) {
    console.log(n--);
  }
}