var Letter = require('./letter.js');

function Word(wrd) {
	this.word = wrd;
	this.letters = [];
	this.wordFound = false;

	//pushes letters to the letters array
	this.getLetters = function() {
		for (var i = 0; i < this.word.length; i++) {
			var newLetter = new Letter(this.word[i]);
			this.letters.push(newLetter);
		}
	}

	//checks to see if the user guessed the entire word
	this.trackWord = function() {
		if(this.letters.every(function(lttr) {
			return lttr.appear === true;
		})) {
			this.wordFound = true;
			return true;
		}
	}

	//checks if the letter guessed is in the word
	this.letterCheck = function(guessedLetter) {
		var whatToReturn = 0;

		// iterates through each letter to see if it matches the letter guessed
		this.letters.forEach(function (lttr) {
			if(lttr.letter === guessedLetter) {
				lttr.appear = true;
				whatToReturn++
			}
		})

		//if guessLetter matches, letter should be shown
		return whatToReturn;
	}

	this.printWord = function() {
		var display = '';

		// print the letter if letters are guessed correctly
		this.letters.forEach(function (lttr) {
			var currentLetter = lttr.printLetter();
			display += currentLetter;
		})
		return display;
	}
};

module.exports = Word;