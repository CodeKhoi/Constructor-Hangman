var Letter = function(ltr) {
	this.letter = ltr;
	this.appear = false;

	//function that prints to terminal
	this.printLetter = function() {
		if(this.letter == ' ') { //prints blank
			this.appear = true;
			return ' ';
		} if(this.appear === false) { // prints _
			return ' _ ';
		} else { // prints the letter
			return this.letter;
		}
	}
};

module.exports = Letter;