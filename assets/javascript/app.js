

$(document).ready(function(){

// var q1 = "What is the capital of United States of America?";
// var q2 = "Who is the current president of United States of America?";
// var q3 = "Who directed Jaws?";
// var q4 = "What year is the movie psycho released in?";
// var q5 = "How many siblings does Michael Jackson have?";

var rightAnswers = 0;
var wrongAnswers = 0;
//===============================================================================
var secs = 10;
var myVar = setInterval(function(){ 
	$("#timer").html("<h1>" + '00 : ' + secs +  "</h1>");

	if(secs<1){
		//function clear interval
		clearInterval(myVar);
		//call gameOver function
		$("#timer").html("<h1>" +'FINISH'+ "</h1>");
		$("#box").html("<p>"+"<h1>" + "Correct Answers: " + rightAnswers + "</h1>"+"</p>"+"<h1>" + "Wrong Answers: " + wrongAnswers + "</h1>"+"</p>");
		
	}

	secs--;
}, 1000);
//===============================================================================
var multipleChoice = 
[

	{
		question: "Grand Central Terminal, Park Avenue, New York is the world's",
		choices:[" largest railway station ", " hightest railway station ", " longest railway station ", " None of the above "],
		answer: " largest railway station "
	},

	{
		question: "Entomology is the science that studies",
		choices:["Behavior of human beings", "Insects", "The origin and history of technical and scientific terms", "The formation of rocks"],
		answer: "Insects"
	}, 

	{
		question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
		choices:["Asia", "Africa", "Europe", "Australia"],
		answer: "Africa"
	},

	{
		question: "Garampani sanctuary is located at",
		choices:["Junagarh, Gujarat", "Diphu, Assama", "Kohima, Nagaland", "Gangtok, Sikkim"],
		answer: "Diphu, Assama"
	}  


];
//===============================================================================

//===============================================================================

	for (var i = 0; i<multipleChoice.length; i++)
{
	console.log(multipleChoice[i].question);
	$("#box").append("<div class = seperate >" + "<h3>" + multipleChoice[i].question + "</h3>" +"</div");

	


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
