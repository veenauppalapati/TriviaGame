

$(document).ready(function(){

// var q1 = "What is the capital of United States of America?";
// var q2 = "Who is the current president of United States of America?";
// var q3 = "Who directed Jaws?";
// var q4 = "What year is the movie psycho released in?";
// var q5 = "How many siblings does Michael Jackson have?";

var rightAnswers = 0;
var wrongAnswers = 0;
//===============================================================================
var secs = 5;
var myVar = setInterval(function(){ 
	$("#timer").html("<h1>" + '00 : ' + secs +  "</h1>");

	if(secs<1){
		//function clear interval
		clearInterval(myVar);
		//call gameOver function
		$("#timer").html("<h1>" +'FINISH'+ "</h1>");
		$("#box").html("<p>" + "Correct Answers: " + rightAnswers + "</p>"+ "<p>" + "Wrong Answers: " + wrongAnswers + "</p>");
		
	}

	secs--;
}, 1000);
//===============================================================================
var multipleChoice = 
[

	{
		question: "What is the capital of United States of America?",
		choices:["a", "b", "c", "d"],
		answer: "a"
	},

	{
		question: "Who is the current president of United States of America?",
		choices:["1", "2", "3", "4"],
		answer: "4"
	} 


];
//===============================================================================

//===============================================================================



for (var i = 0; i<multipleChoice.length; i++)
{
	console.log(multipleChoice[i].question);
	$("#box").append("<div>" + multipleChoice[i].question + "</div");

	


	for(var j = 0; j<multipleChoice[i].choices.length; j++)
	{


		// $("#box").append("<input type = radio class = 'radioButton' ' value='" + multipleChoice[i].choices[j]+ "''>" + multipleChoice[i].choices[j] + "</input>");
		$("#box").append("<input value = '"+ multipleChoice[i].choices[j] + "' type = 'radio' id = '"+ i + "' class = 'radioButton'>" + multipleChoice[i].choices[j] + "</input>");

		
	} 
	
}
$('.radioButton').on('click', function() {
	var quest = $(this).attr('id')
	var val = $(this).val();
	if (val == multipleChoice[quest].answer) {
		console.log('yes')
		rightAnswers++;
	}
	else {
		console.log('no');
		wrongAnswers++;
		return;
	}
	
});



//===============================================================================
});
