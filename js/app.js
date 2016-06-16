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
	var feedback = $("#feedback").val(),
		feedback = "Start guessing!";
	$("#count").val('');
	$("#guessList").empty();
	$("#userGuess").val('');
	generateNumber();
}

// evaluate user input
function evaluateInput() {
	validateGuess();
	userFeedback();
	guessCount();
	trackGuesses();
	$("#userGuess").val('');
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

	var secretNum = Math.floor((Math.random() * 100) + 1);

	if(userGuess == secretNum) {
		win();
	}
	else if(Math.abs(userGuess - secretNum) < 10) {
		$("#feedback").val("Sizzling!");
	}
	else if(Math.abs(userGuess - secretNum) < 20) {
		$("#feedback").val("Hot!");
	}
	else if(Math.abs(userGuess - secretNum) < 30) {
		$("#feedback").val("Lukewarm!");
	}
	else {
		$("#feedback").val("Ice Cold!");
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
	$("#feedback").val("Winner! You guessed correctly! Click New Game to play again.");
	$("#guessButton").hide();
}

// generate secret random number
function generateNumber() {
	var secretNum = Math.floor((Math.random() * 100) + 1);
}

