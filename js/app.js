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
	//'Make your guess!'  #feedback
	//Guess counter == 0
	//Clear <li>
	generateNumber();
}

// evaluate user input
$("#guessButton").click(userGuess);

function userGuess() {
	if (validateGuess == generateNumber) {
		feedback = "Winner!";
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

// validate user input
function validateGuess() {
	if(userGuess !== Number) {
		alert("Please enter a number!");
	}
	if(userGuess < 1 || userGuess > 100) {
		alert("Please enter a number between 1 and 100!");
	}
}

// provide user feedback

// track guess count
function guessCount() {
	count++;
}

// notify winner

// generate secret random number
function generateNumber() {
	Math.floor((Math.random() * 100) + 1);
}