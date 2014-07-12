$(document).ready(function() {
	var input = parseInt(prompt("Please enter a FizzBuzz number"));
	var textOutput = "";

	for (i = 1; i <= input; i++) {
		if (i % 15 == 0) {
			textOutput = textOutput + "fizzbuzz\n";
		}
		else if (i % 3 == 0) {
			textOutput = textOutput + "fizz\n";
		}
		else if (i % 5 == 0) {
			textOutput = textOutput + "buzz\n";
		}
		else {
			textOutput = textOutput + i + "\n";
		}
	}
	$('body').append("<p>"+textOutput+"</p>");
  })