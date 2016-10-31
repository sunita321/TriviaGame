//Declare Quiz Questions variables
	var question0 = 
	{
		question: "Who was the first Disney princess based on a real historical figure?",
		answer: "Pocahontas",
		choices: ["Mulan", "Snow White", "Tiana", "Pocahontas"],
		correctAnswer: 3
	};

	var question1 = 
	{
		question: "Which is the only Disney animated film with a main character that doesn’t speak?",
		answer: "Dumbo",
		choices: ["Robin Hood", "Dumbo", "Pinocchio", "Fantasia"],
		correctAnswer: 1
	};

	var question2 = 
	{
		question: "Which actor supplied the voice of Mushu in Mulan?",
		answer: "Eddie Murphy",
		choices: ["Tom Cruise", "Brad Pitt", "Eddie Murphy", "Nicholas Cage"],
		correctAnswer: 2
	};

	var question3 = 
	{
		question: "In Aladdin, what does Jasmine steal from the Marketplace?",
		answer: "Apple",
		choices: ["Apple", "Bread", "Jewelry", "Grapes"],
		correctAnswer: 0
	};


//Array of questions
var QuestionsArray = [question0, question1, question2, question3];

var indexQuestion = 0;


//Game scores
var gameScores = 
{
	answeredCorrect: 0,
	answeredWrong: 0,
	missed: 0
};

//Display Question

	function displayQuestion()
	{
		$("#question").html("<h3>" + QuestionsArray[indexQuestion].question + "</h3>");
		$("#button0").text(QuestionsArray[indexQuestion].choices[0]);
		$("#button1").text(QuestionsArray[indexQuestion].choices[1]);
		$("#button2").text(QuestionsArray[indexQuestion].choices[2]);
		$("#button3").text(QuestionsArray[indexQuestion].choices[3]);

	}

$(document).ready(function()

{	
	displayQuestion();

});

//User input 
$('.btn').click(function() 
{
	var userButtonValue = ($(this).attr("data-value"));
	console.log(userButtonValue);

	if (userButtonValue == QuestionsArray[indexQuestion].correctAnswer)
	{
		gameScores.answeredCorrect ++;
		console.log("correct answer " + gameScores.answeredCorrect);
	}

	else
	{
		gameScores.answeredWrong ++;
		console.log("wrong answer " + gameScores.answeredWrong);
	}


	indexQuestion++;

	if (indexQuestion < QuestionsArray.length)
	{
		displayQuestion();
	}
	else
	{
		$("#score").html("<div>"+ "Correct Guesses: " + gameScores.answeredCorrect +"</div>" + "<div>"+ "Wrong Guesses: " + gameScores.answeredWrong +"</div>");
		
	}
	

});

