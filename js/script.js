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