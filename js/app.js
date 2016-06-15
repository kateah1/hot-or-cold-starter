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

  	// start new game
	$("a.new").click(newGame);
}

function newGame() {
	var feedback = $("#feedback").val(),
		feedback = "Start guessing!";
	$("#count").val('');
	$("ul").empty();
	generateNumber();
}

// evaluate user input
function evaluateInput() {
	validateGuess();
	userFeedback();
	guessCount();
	trackGuesses();
}

$("#guessButton").click(evaluateInput);	

// validate user input
function validateGuess() {
	var userGuess = $("#userGuess").val(); 
		if(isNaN(userGuess)) {
			alert("Please enter a number!");
		}
		if(userGuess < 1 || userGuess > 100) {
			alert("Please enter a number between 1 and 100!");
		}
}

// provide user feedback
function userFeedback() {
	if (userGuess == generateNumber) {
		win();
	}
	else if (Math.abs(validateGuess - generateNumber) < 10) {
		$("#feedback").val() == "Sizzling!";
	}
	else if (Math.abs(validateGuess - generateNumber) < 20) {
		$("#feedback").val() == "Hot!";
	}
	else if (Math.abs(validateGuess - generateNumber) < 30) {
		$("#feedback").val() == "Lukewarm!";
	}
	else {
		$("#feedback").val() == "Ice Cold!";
	}
}

// track guess count
function guessCount() {
	var counter = $("#count").val();
	counter++;
}

// track guesses
function trackGuesses() {
	$("#guessList").append("<li>" + $("#userGuess").val() + "</li>");
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