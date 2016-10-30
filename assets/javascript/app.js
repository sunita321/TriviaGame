//Declare Quiz Questions variables
	var question1 = 
	{
		question: "Who was the first Disney princess based on a real historical figure?",
		answer: "Pocahontas",
		choices: ["Mulan", "Snow White", "Tiana", "Pocahontas"],
		correctAnswer: 4
	};

	var question2 = 
	{
		question: "Which is the only Disney animated film with a main character that doesn’t speak?",
		answer: "Dumbo",
		choices: ["Robin Hood", "Dumbo", "Pinocchio", "Fantasia"],
		correctAnswer: 2
	};

	var question3 = 
	{
		question: "Which actor supplied the voice of Mushu in Mulan?",
		answer: "Eddie Murphy",
		choices: ["Tom Cruise", "Brad Pitt", "Eddie Murphy", "Nicholas Cage"],
		correctAnswer: 3
	};

	var question4 = 
	{
		question: "In Aladdin, what does Jasmine steal from the Marketplace?",
		answer: "Apple",
		choices: ["Apple", "Bread", "Jewelry", "Grapes"],
		correctAnswer: 1
	};

//Game scores
var gameScores = 
{
	answeredCorrectly: 0,
	answeredIncorrectly: 0,
	unanswered: 0
};

//Display Question

	function displayQuestion()
	{
		$("#question").html("<h3>" + question1.question + "</h3>");
		$("#button0").text(question1.choices[0]);
		$("#button1").text(question1.choices[1]);
		$("#button2").text(question1.choices[2]);
		$("#button3").text(question1.choices[3]);

	}

$(document).ready(function()

{	
	displayQuestion();

});

//User input 
function check_answer () {

	$(".options").on("click" , function(){

		var userInput = $(this);
		user_check = user_guess.data("boolean");

		console.log(user_guess);
		console.log(user_check);

		if (user_check == true) {

			console.log("hey");
			right_answer();

		} else {
			console.log("bye");
			wrong_answer();
		}


	}