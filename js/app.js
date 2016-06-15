'use strict';

$(document).ready(pageLoad);

function pageLoad() {

	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

  	newGame();
}

// start new game
$("a.new").click(newGame);

function newGame() {
	for (var feedback = "#feedback") {
		feedback = "Start guessing!";
	}
	guessCount();
	$("ul").empty();
	generateNumber();
}

// evaluate user input
$("#guessButton").click(validateGuess, userFeedback);

// validate user input
function validateGuess() {
	for (var userGuess = "#userGuess") {
		if(userGuess !== Number) {
			alert("Please enter a number!");
		}
		if(userGuess < 1 || userGuess > 100) {
			alert("Please enter a number between 1 and 100!");
		}
	}	
}

// provide user feedback
function userFeedback() {
	if (userGuess == generateNumber) {
		win();
	}
	else if (Math.abs(validateGuess - generateNumber) < 10) {
		feedback = "Sizzling!";
	}
	else if (Math.abs(validateGuess - generateNumber) < 20) {
		feedback = "Hot!";
	}
	else if (Math.abs(validateGuess - generateNumber) < 30) {
		feedback = "Lukewarm!";
	}
	else {
		feedback = "Ice Cold!";
	}
}

// track guess count
function guessCount() {
	count++;
}

// notify winner
function win() {
	feedback = "Winner! You guessed correctly! Click New Game to play again.";
	$("#guessButton").hide();
}

// generate secret random number
function generateNumber() {
	Math.floor((Math.random() * 100) + 1);
}