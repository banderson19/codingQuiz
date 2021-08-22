
var startQuizBtnEl = document.getElementById("start-quiz")
var nextQuestionBtnEl = document.getElementById("nextQuestion")
var questionDisplayEl = document.getElementById("questionDisplay");
var choiceOneDisplayEl = document.getElementById("choice1");
var choiceTwoDisplayEl = document.getElementById("choice2");
var choiceThreeDisplayEl = document.getElementById("choice3");
var choiceFourDisplayEl = document.getElementById("choice4");

choiceOneDisplayEl.style.display = "none"
choiceTwoDisplayEl.style.display = "none"
choiceThreeDisplayEl.style.display = "none"
choiceFourDisplayEl.style.display = "none"
nextQuestionBtnEl.style.display = "none"


var questionsArr = [
    {
        question: "Commonly used datatypes DO NOT include?",
        choiceOne: "Strings",
        choiceTwo: "Booleans",
        choiceThree: "Alerts",
        choiceFour: "Numbers",
        corretAnswer: "Alerts"
    },
    {
        question: "The condition statement if/else is enclosed with the following:",
        choiceOne: "Parenthesis",
        choiceTwo: "Curly Brackets",
        choiceThree: "Quotes",
        choiceFour: "Square Brackets",
        correctAnswer: "Parenthesis"
    },
    {
        question: "Arrays can be used to store the following:",
        choiceOne: "Number of strings",
        choiceTwo: "Other arrays",
        choiceThree: "Booleans",
        choiceFour: "All of the above",
        correctAnswer: "All of the above"
    },
    {
        question: "A very useful tool to debug arrays is:",
        choiceOne: "Javascript",
        choiceTwo: "Terminal/bash",
        choiceThree: "For loops",
        choiceFour: "Console.log",
        correctAnswer: "For loops"
    },
    {
        question: "Strings must be enclosed with:",
        choiceOne: "Commas",
        choiceTwo: "Curly brackets",
        choiceThree: "Quotes",
        choiceFour: "Parenthesis",
        correctAnswer: "Quotes"
    }
]

startQuizBtnEl.addEventListener("click", function () {

    startQuizBtnEl.style.display = 'none';
    choiceOneDisplayEl.style.display = ""
    choiceTwoDisplayEl.style.display = ""
    choiceThreeDisplayEl.style.display = ""
    choiceFourDisplayEl.style.display = ""  
    nextQuestionBtnEl.style.display = "" 
    console.log('hits')
    

    for(var i = 0; i < questionsArr.length; i ++){
        console.log(questionsArr[i].question) 
            questionDisplayEl.innerHTML = questionsArr[i].question;    
            choiceOneDisplayEl.textContent = questionsArr[i].choiceOne;
            choiceTwoDisplayEl.textContent = questionsArr[i].choiceTwo;
            choiceThreeDisplayEl.textContent = questionsArr[i].choiceThree;
            choiceFourDisplayEl.textContent = questionsArr[i].choiceFour; 
            i++
        return nextQuestionBtnEl.addEventListener("click", function() {
            console.log('111', i)
            if ( i < questionsArr.length) {
                questionDisplayEl.innerHTML = questionsArr[i].question;    
                choiceOneDisplayEl.textContent = questionsArr[i].choiceOne;
                choiceTwoDisplayEl.textContent = questionsArr[i].choiceTwo;
                choiceThreeDisplayEl.textContent = questionsArr[i].choiceThree;
                choiceFourDisplayEl.textContent = questionsArr[i].choiceFour;
                i++
            } else {
                alert('no more question')
            }
            
        })
    }
})

