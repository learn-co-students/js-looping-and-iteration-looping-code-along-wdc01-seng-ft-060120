function writeCards(namesArray){
	let messages = [];
	for(name of namesArray){
		messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
	}
	return messages;
}

function countDown(n){
	for(let i = 0; i <= n; i++){
		console.log(n - i);
	}
}
