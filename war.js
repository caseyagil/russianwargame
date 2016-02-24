var MGi = 0, bonus = 0, cards = [];
var rank = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
var value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var suite = ['hearts','diamonds','spades','clubs'];
// suites are not utilized but I figured to incorporate them.
var userDeck = [], userPoints = 0;
var computerDeck = [], computerPoints = 0;

//Here we have cards array 0-51.
var c = 0;
while (c < 52) {
	for (var s = 0; s <= 3; s++) {
		for (var rv = 0; rv <= 12; rv++) {
			cards[c] = {
				suite: suite[s],
				rank: rank[rv],
				value: value[rv],
				img: 'images/' + rank[rv] + '_of_' + suite[s] + '.png',
			}
			c++;
		}
	}
}

//cuts the deck
//the array here and var cards above
var assignDeck = function(array){
	for(var i = 0; i < (array.length); i++){
		if (i % 2 === 0) {
			userDeck.push(array[i]);
		} else {
			computerDeck.push(array[i]);
		};
	};
};


//shuffles the deck
var shuffle = function(array) {
	for (var i = array.length - 1; i > 0; i--) {
    	var j = Math.floor(Math.random() * (i + 1));
    	var temp = array[i];
    	array[i] = array[j];
    	array[j] = temp;
	}
	array = array;
	return array;
}

//checks if either the computer or player already won the game
var winnerCheck = function (playerPoints, computerPoints) {
	if (playerPoints >= 10) {
		// alert("Congrats you won the game!");
		$('#decision').html('<div id="win">You won!</div>');
		$('.btn-flip').hide();
		$('.btn-playagain').toggle();//This is the play again
	} else if (computerPoints >= 10) {
		// alert("You lose!");
		$('#decision').html('<div id="lose">You lose!</div>');
		$('.btn-flip').hide();
		$('.btn-playagain').toggle();//This is the play again
	} else {
		return false;
	}
};

//starts the game and incorporates all above functions and variables
var mainGame = function () {
	while (userDeck[MGi].value === computerDeck[MGi].value) {
		MGi += 2;
		bonus += 2;
		alert('WAR!');

	};
	if(userDeck[MGi].value > computerDeck[MGi].value){
		userPoints++;
		userPoints += bonus;
	} else {
		computerPoints++;
		computerPoints += bonus;
	};
	$('#user-card-flipped').html("<img id='user-card-img' src='" + userDeck[MGi].img + "'/>");
	$('#computer-card-flipped').html("<img id='computer-card-img' src='" + computerDeck[MGi].img + "'/>");
	MGi++;
	bonus = 0;
};

// jquery stuff
$(document).ready(function() {
	$('.btn-start').show();
	$('.btn-flip').hide();
	$('.btn-playagain').hide();
});
$('.btn-start').click(function(e) {
	$(this).remove();
	$('.btn-flip').toggle();
	assignDeck(shuffle(cards));
	console.log("userDeck: ", userDeck);
	console.log("computerDeck: ", computerDeck);
	mainGame();
	$('#userPoints').empty().append("UserPoints: " + userPoints);
	$('#computerPoints').empty().append("ComputerPoints: " + computerPoints);
	winnerCheck(userPoints, computerPoints);
});
$('.btn-flip').click(function(e) {
	mainGame();
	$('#userPoints').empty().append("UserPoints: " + userPoints);
	$('#computerPoints').empty().append("ComputerPoints: " + computerPoints);
	winnerCheck(userPoints, computerPoints);
	// $('#war').remove();
});
$('.btn-playagain').click(function(e) {
	$(this).hide();
	$('.btn-flip').toggle();
	$('#win').remove();
	$('#lose').remove();
	MGi = 0;
	userDeck = [], userPoints = 0;
	computerDeck = [], computerPoints = 0;
	assignDeck(shuffle(cards));
	console.log("userDeck: ", userDeck);
	console.log("computerDeck: ", computerDeck);
	mainGame();
	$('#userPoints').empty().append("UserPoints: " + userPoints);
	$('#computerPoints').empty().append("ComputerPoints: " + computerPoints);
	winnerCheck(userPoints, computerPoints);
});
