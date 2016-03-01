// this is difficult to read the following line above, you should separate them on each line
var MGi = 0, bonus = 0, cards = [];
var rank = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
var value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var suite = ['hearts','diamonds','spades','clubs'];
// suites are not utilized but I figured to incorporate them.
var userDeck = [], userPoints = 0;
var computerDeck = [], computerPoints = 0;

//Here we have cards array 0-51.
//This is fine, but maybe just name it var count? It's picky, just more semantic
var c = 0;
while (c < 52) {
	// Once again here: i would use var i = 0 in your for loop for convention.
	for (var s = 0; s <= 3; s++) {
		for (var rv = 0; rv <= 12; rv++) {
			// I really like that you created an object here :)
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
	// you don't need these () around array.length
	for(var i = 0; i < (array.length); i++){
		if (i % 2 === 0) {
			userDeck.push(array[i]);
		} else {
			computerDeck.push(array[i]);
		};
	};
};

// I love that you commented your code!





//shuffles the deck
var shuffle = function(array) {
	for (var i = array.length - 1; i > 0; i--) {
		// I don't know that I would put Math.random within this for loop
		// I might use the .sort method instead and take it out of the for loop
		var j = Math.floor(Math.random() * (i + 1));
		// I don't understand the assignment of the indexes below;
		var temp = array[i];
		array[i] = array[j];
		// Since temp = array[i]
		// And we just ressigned array[i] = array[j]
		// array[j] === array[i] here again is circular and negates the line above
		array[j] = temp;
	}

	// Also, is the above array reference to a global variable here? I did not see it in your code. I would name it something else
	// to better understand your objective. The syntax might look like the following. Please note this is not functional code, but hopefully is helpful to give you an idea

	// var suffledDeck = function(cardsArray){
	// 	for (var i = array.length - 1; i > 0; i--) {
	// 		var randomIndex = Math.floor(Math.random() * (i + 1));
	// 		cardArray[i] = cardArray[randomIndex];
	// 	}
	// 	return cardsArray;
	// }
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
		// just watch out for further indentation
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
// We might be wrapping all of our jquery code in document.ready depending on our application. Just something to think about!
$(document).ready(function() {
	$('.btn-start').show();
	$('.btn-flip').hide();
	$('.btn-playagain').hide();
});

// I typically like to use .on("click", callbackFunction) over .click(), just a preference!

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
	// this event listener is pretty long. I would move some of this into a separate function, and call that function here:

	// $('.btn-playagain').click(function(e) {
		// resetGame(this);
		// assignDeck(shuffle(cards));
		// mainGame();
		// $('#userPoints').empty().append("UserPoints: " + userPoints);
		// $('#computerPoints').empty().append("ComputerPoints: " + computerPoints);
		// winnerCheck(userPoints, computerPoints);
	}

	//
	// function resetGame(button){
		// button.hide();
		// $('.btn-flip').toggle();
		// $('#win').remove();
		// $('#lose').remove();
		// MGi = 0;
		// userDeck = [], userPoints = 0;
		// computerDeck = [], computerPoints = 0;
	// 	}
	// }
	
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
