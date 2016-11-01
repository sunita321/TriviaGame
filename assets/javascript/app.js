//Declare Quiz Questions variables
	var question0 = 
	{
		question: "Who was the first Disney princess based on a real historical figure?",
		answer: "Pocahontas",
		choices: ["Mulan", "Snow White", "Tiana", "Pocahontas"],
		correctAnswer: 3,
		correctGif: "assets/images/giphy1.gif"
	};

	var question1 = 
	{
		question: "Which is the only Disney animated film with a main character that doesn’t speak?",
		answer: "Dumbo",
		choices: ["Robin Hood", "Dumbo", "Pinocchio", "Fantasia"],
		correctAnswer: 1,
		correctGif: "assets/images/giphy2.gif"
	};

	var question2 = 
	{
		question: "Which actor supplied the voice of Mushu in Mulan?",
		answer: "Eddie Murphy",
		choices: ["Tom Cruise", "Brad Pitt", "Eddie Murphy", "Nicholas Cage"],
		correctAnswer: 2,
		correctGif: "assets/images/giphy3.gif"
	};

	var question3 = 
	{
		question: "In Aladdin, what does Jasmine steal from the Marketplace?",
		answer: "Apple",
		choices: ["Apple", "Bread", "Jewelry", "Grapes"],
		correctAnswer: 0,
		correctGif: "assets/images/giphy4.gif"
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


//Timer Countdown 

var timer = 
{
    time:10,

	reset: function()
    {
        timer.time = 10;
        
        //change the "display" div to "00:05"
        $('#timerDisplay').html('Timer: ' + '00:10');

    },

    start: function()
    {
        //Use setInterval to start the count here
        counter = setInterval(timer.count, 1000);
    },

    stop: function()
    {
        //Use clearInterval to stop the count here
        clearInterval(counter);
    },

 	count: function()
    {   //increment time by 1, remember we can't use "this" here
        timer.time--;
         //Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable
        var converted = timer.timeConverter(timer.time);
         //Use the variable you just created to show the converted time in the "display" div
        $('#timerDisplay').html('Timer: ' + converted);

        if (timer.time == 0)
        {
        	//Display correct answer if timer runs out and question is missed???
        	$('#quizMessage').html("<div>" + QuestionsArray[indexQuestion].answer + "</div");
        	gameScores.missed++;
        	nextQuestion();
        }

    },

 	timeConverter: function(t)
    { //This function is done. You do not need to touch it. It takes the current time in seconds and converts it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }

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
	timer.reset();
	timer.start();
	$("#reset").hide();

});

//User input check answer
$('.btn').click(function() 
{
	

	if (indexQuestion < QuestionsArray.length)
	{
		var userButtonValue = ($(this).attr("data-value"));
		console.log(userButtonValue);
		//Check for win
		if (userButtonValue == QuestionsArray[indexQuestion].correctAnswer)
		{
			$('#quizMessage').show(); //show the correct gif div
			$('#timerDisplay').hide();
			$('#quizMessage').html("<h2><p>Correct!</p></h2><img src='" + QuestionsArray[indexQuestion].correctGif + "' height = 200 width = 350 alt='correct'>");
			gameScores.answeredCorrect ++;
			console.log("correct answer " + gameScores.answeredCorrect);
			
			// hide the questionAsked board and stop the timer
			//$("#timerDisplay").hide();
			timer.stop();
			timer.reset();
						
		

		}
		//Else loss
		else
		{
			//Display correct answer??
			$('#quizMessage').html("<div>" + QuestionsArray[indexQuestion].answer + "</div");
			gameScores.answeredWrong ++;
			console.log("wrong answer " + gameScores.answeredWrong);
		}


		setTimeout(nextQuestion, 5000);
		
	}
});

//move to next question function

function nextQuestion()
{
	indexQuestion++;

	if (indexQuestion < QuestionsArray.length)
	{
		displayQuestion();
		$('#quizMessage').hide();
		$('#timerDisplay').show();
		timer.stop();
		timer.reset();
		timer.start();
	}

//Display score when game ends
	else
	{
		$("#score").html("<div>"+ "Your Score" +"</div>"+
		"<div>"+ "Correct Guesses: " + gameScores.answeredCorrect +"</div>" + 
		"<div>"+ "Wrong Guesses: " + gameScores.answeredWrong +"</div>" +
		"<div>"+ "Missed Questions: " + gameScores.missed +"</div>" 
		);

		timer.stop();
		$('#timerDisplay').html('00:00');

		$("#reset").show();

		$('.resetme').click(function()
		{
			resetVariables();
			displayQuestion();
			timer.stop();
			timer.reset();
			timer.start();

		});
		
	}


}

function resetVariables() 
{
	console.log("resetVariables function reached");
	gameScores.answeredCorrect = 0;
	gameScores.answeredWrong = 0;
	gameScores.missed = 0;
	indexQuestion = 0;

	$("#score").html("");
	$("#reset").hide();
}

