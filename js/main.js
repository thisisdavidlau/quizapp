var quizArray = [
//CORRECT ONES FOR APPLE
 	{
 		choices: ["Green", "White"],
 		answer: "White"
 	},
 	{
	 	choices: ["$600 or less", "$600 plus"],
 		answer: "$600 plus"
 	},
 	{
 		choices: ["Photography", "Selfies"],
 		answer: "Photography"
 	},
 	{
 		choices: ["Windows", "Mac"],
 		answer: "Mac"
 	},
 	{
 		choices: ["Tim Cook", "Sundar Pichai"],
 		answer: "Tim Cook"
 	},
 	{
 		choices: ["Andy Rubin", "Steve Jobs"],
 		answer: "Steve Jobs"
 	},
 	{
 		choices: ["Platform", "Brand"],
 		answer: "Brand"
 	},
 	{
 		choices: ["Safari", "Chrome"],
 		answer: "Safari"
 	},
 	{
 		choices: ["Geek", "Nerd"],
 		answer: "Nerd"
 	},
 	{
 		choices: ["Dog", "Cat"],
 		answer: "Dog"
 	},

]

//ELEMENTS
var mainBody = document.getElementById("mainBody")
	questionDiv = document.getElementById("question")
	choicesDiv = document.getElementById("choices")
	submitBtn = document.getElementById("submit")

var currentQuestion = 0
	score = 0
	askingQuestion = true

function askQuestion() {
	var choices = quizArray[currentQuestion].choices
	var choicesHtml = ""

	//LOOP THROUGH CHOICES
	for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<button type='button' onclick='checkAnswer()' name='quizArray" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" + choices[i] + "</button>"
  }

	//LOAD QUESTION
	questionDiv.innerHTML = "<h1>Choice #" + (currentQuestion + 1) + "</h1>"
	//LOAD CHOICES
	choicesDiv.innerHTML = choicesHtml
}



function checkAnswer() {
  
  if (askingQuestion) {
    // submitBtn.textContent = "Next";
    askingQuestion = false;

    // SEE WHICH BUTTON CLICKED
    var userpick,
      // correctIndex,
      btn = document.getElementsByName("quizArray" + currentQuestion);
    
    for (var i = 0; i < btn.length; i++) {///////////this is the part I need help with
      if (btn[i].click()) {
        btn[i].click() = btn[i].value
        btn[i].value = userpick
        
      }

    }

    // SEE IF THEY GOT IT RIGHT OR WRONG
    if (userpick == quizArray[currentQuestion].answer) {
      score++;
      console.log(score)
    }

  	}
  	else { //NEXT QUESTION
    askingQuestion = true;

    // IF NOT ON LAST QUESTION, ADD PLUS 1
    if (currentQuestion < quizArray.length - 1) {
      currentQuestion++;
      askQuestion();
    }
    else {
      showFinalResults();
    }
  }
}


function showFinalResults() {
	if(score <= 5) {
  		questionDiv.innerHTML = "<h2>You've completed the quiz!</h2>" +
 		"<h2>CONGRATULATIONS!</h2>" + "<h2>YOU ARE AN ANDROID!</h2>" +
 		"<img src='img/androidgun.png' id='andi'>"
 		document.getElementById('andi').className = "img-responsive center-block"
 		choicesDiv.className = "displayNone"

	}
	else{
		questionDiv.innerHTML = "<h2>You've completed the quiz!</h2>" +
 		"<h2>CONGRATULATIONS!</h2>" + "<h2>YOU ARE AN APPLE!</h2>" + 
 		"<img src='img/appleabs.png' id='apbs'>"
 		document.getElementById('apbs').className = "img-responsive center-block"
 		choicesDiv.className = "displayNone"
	}
}

window.addEventListener("load", askQuestion, false);




