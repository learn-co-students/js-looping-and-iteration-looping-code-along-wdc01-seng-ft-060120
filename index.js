// Code your solutions in this file

function writeCards( x, y ) {
    let arr = []
    for ( let i = 0; i < x.length; i++ ) {
      arr.push( `Thank you, ${x[i]}, for the wonderful ${y} gift!` )
    }
    return arr
  }
  

function countDown(x) {

    while ( x > 0){
        console.log(x)
        x = x-1
    }        
    console.log(x)
};

