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

	var question4 = 
	{
		question: "Which Disney movie was the first to be nominated for an Oscar?",
		answer: "Beauty and the Beast",
		choices: ["Beauty and the Beast", "Aladdin", "Lion King", "Mulan"],
		correctAnswer: 0,
		correctGif: "assets/images/giphy5.gif"
	};

	var question5 = 
	{
		question: "Who was the first Disney princess?",
		answer: "Snow White",
		choices: ["Aurora", "Snow White", "Ariel", "Tiana"],
		correctAnswer: 1,
		correctGif: "assets/images/giphy6.gif"
	};


	var question6 = 
		{
			question: "What character was voiced by Matthew Broderick and Jonathan Taylor Thomas?",
			answer: "Simba",
			choices: ["Bambi", "Prince Eric", "Aladdin", "Simba"],
			correctAnswer: 3,
			correctGif: "assets/images/giphy7.gif"
		};
	

//Array of questions
var QuestionsArray = [question0, question1, question2, question3, question4, question5, question6];

var indexQuestion = 0;


//Game scores
var gameScores = 
{
	answeredCorrect: 0,
	answeredWrong: 0,
	missed: 0
};

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

//move to next question function

function nextQuestion()
{
	indexQuestion++;

	if (indexQuestion < QuestionsArray.length)
	{
		displayQuestion();
		$('#quizMessage').hide();
		$('#timerDisplay').show();
		$('.btn').show();
		timer.stop();
		timer.reset();
		timer.start();
	}

//Display score when game ends
	else
	{
		$('#quizMessage').hide();
		$('#question').hide();
		$("#score").html("<div>"+ "Game Over! <br> Your Score" +"</div>"+
		"<div>"+ "Correct Guesses: " + gameScores.answeredCorrect +"</div>" + 
		"<div>"+ "Wrong Guesses: " + gameScores.answeredWrong +"</div>" +
		"<div>"+ "Missed Questions: " + gameScores.missed +"</div>" 
		);

		audio = new Audio("assets/TaDa.mp3");
			audio.play();

		timer.stop();
		$('#timerDisplay').html('00:00');

		$("#reset").show();

		$('.resetme').click(function()
		{
			$('#quizMessage').hide();
			resetVariables();
			displayQuestion();
			$('#question').show();
			$('.btn').show();
			$('#timerDisplay').show();
			timer.stop();
			timer.reset();
			timer.start();

		});
		
	}


}
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
        	//Display correct answer if timer runs out and question is missed
        	$('#quizMessage').show(); //show the correct gif div
			$('#timerDisplay').hide();
			$('.btn').hide();
			$('#quizMessage').html("<h2><p>Time's up! <br> The correct answer was: <br>" + QuestionsArray[indexQuestion].answer + "</p></h2>");
        	gameScores.missed++;
        	audio = new Audio("assets/Missed.mp3");
			audio.play();

        	setTimeout(nextQuestion, 3000);
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
//Start game on button press


$(document).ready(function()


{	//hide all until start button is pressed
	$('#timerDisplay').hide();
	$('.btn').hide();
	$("#reset").hide();

	$('#startme').on("click", function() 

		{
			displayQuestion();
			timer.reset();
			timer.start();
			//show timer and buttons
			$('#timerDisplay').show();
			$('.btn').show();
			$("#reset").hide();
			$("#startme").hide();
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
			
			$('#quizMessage').html("<h2><p>Correct!</p></h2><img src='" + QuestionsArray[indexQuestion].correctGif + "' height = 200 width = 350 alt='correct'>");
			gameScores.answeredCorrect ++;//increment score
			console.log("correct answer " + gameScores.answeredCorrect);
			audio = new Audio("assets/ding.mp3");
			audio.play();
			
			//reset timer
			timer.stop();
			timer.reset();						
		

		}
		//Else loss
		else
		{
		
			$('#quizMessage').html("<h2><p>Wrong! <br> The correct answer was: <br>" + QuestionsArray[indexQuestion].answer + "</p></h2>");
			gameScores.answeredWrong ++;
			console.log("wrong answer " + gameScores.answeredWrong);
			audio = new Audio("assets/Buzzer.mp3");
			audio.play();

			//reset timer
			timer.stop();
			timer.reset();	


		}

		$('#quizMessage').show(); //show the correct gif div
		$('#timerDisplay').hide();
		$('.btn').hide();

		setTimeout(nextQuestion, 3000);
		
	}
});




// end document.ready function
});