function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove;
computerMove = 'kamień';
printMessage(computerMove + 'Zagrałem ' + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier';
printMessage(playerMove + 'Zagrałem' + '! Jeśli Twój ruch to nozyczki, to wygrywasz');

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if ( randomNumber == '2'){
  computerMove = 'papier';
} else if ( randomNumber == '3') {
    computerMove = 'nozyce';
}
printMessage('Mój ruch: ' + computerMove);