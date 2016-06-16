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

var secretNum = Math.floor((Math.random() * 100) + 1);
var prevGuess = [];

// generate secret random number
function generateNumber() {
	secretNum;
}

function newGame() {
	$("#feedback").text("Start guessing!");
	$("#count").text("0");
	$("#guessList").empty();
	$("#userGuess").val('');
	generateNumber();
}

// evaluate user input
function evaluateInput() {
	validateGuess();
}

$("#guessButton").click(evaluateInput);	

// validate user input
function validateGuess() {
	var userGuess = $("#userGuess").val(); 
		for(var i = 0; i < prevGuess.length; i++) {
			if(prevGuess[i] === userGuess) {
				return alert("You have already guessed that number!");
			}	
		}
		if(isNaN(userGuess)) {
			return alert("Please enter a number!");
		}
		else if(userGuess < 1 || userGuess > 100) {
			return alert("Please enter a number between 1 and 100!");
		}
		else {
			userFeedback();
			guessCount();
			trackGuesses();
			$("#userGuess").val('');
		}
}

// provide user feedback
function userFeedback() {

	if(userGuess == secretNum) {
		win();
	}
	else if(Math.abs(userGuess - secretNum) < 10) {
		$("#feedback").text("Sizzling!");
	}
	else if(Math.abs(userGuess - secretNum) < 20) {
		$("#feedback").text("Hot!");
	}
	else if(Math.abs(userGuess - secretNum) < 30) {
		$("#feedback").text("Lukewarm!");
	}
	else {
		$("#feedback").text("Ice Cold!");
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
	$("#feedback").text("Winner! You guessed correctly! Click New Game to play again.");
	$("#guessButton").hide();
}



