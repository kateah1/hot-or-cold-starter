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

}

var secretNum = Math.floor((Math.random() * 100) + 1);
var prevGuess = [];
var counter = 0;

// New Game
function newGame() {
	$("#guessButton").show();
	$("#feedback").text("Start guessing!");
	$("#userGuess").val("");
	$("#count").text("0");
	$("#guessList").empty();
	prevGuess = [];
	generateNum();
}

// Generate Secret Random Number
function generateNum() {
	secretNum;
}

// When Guess Button is Clicked, Check if Valid Number
$("#guessButton").click(validateGuess);

function validateGuess() {
	var userGuess = $("#userGuess").val();
	for(var i = 0; i < prevGuess.length; i++) {
		if(userGuess === prevGuess[i]) {
			return alert("You've already guessed that number!");
		}
	}	
	if(isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
		return alert("Please enter a valid integer between 1 and 100!")
	}
	else {
		userFeedback();
		guessList();
		$("#userGuess").val("");
	}
}

// Provide Feedback of User Guess Relative to Secret Number
function userFeedback() {
	var userGuess = $("#userGuess").val();
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

// Keep Track in a List the Numbers the User has Guessed
function guessList() {
	counter++;
	$("#count").text(counter);
	prevGuess.push($("#userGuess").val());
	$("#guessList").append("<li>" + $("#userGuess").val() + "</li>");
}

//User has Won the Game
function win() {
	$("#feedback").text("Winner! You guessed correctly! Click New Game to play again.");
	$("#guessButton").hide();
}

// Start a New Game
$("a.new").click(newGame);


