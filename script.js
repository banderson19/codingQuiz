
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
        correctAnswer: "Alerts"
    },
    {
        question: "The condition statement if/else is enclosed with the following:",
        choiceOne: "Parenthesis",
        choiceTwo: "Curly Brackets",
        choiceThree: "Anchor elements '< >' ",
        choiceFour: "Square Brackets",
        correctAnswer: "Parenthesis"
    },
    {
        question: "Arrays can be used to store the following:",
        choiceOne: "Number of strings",
        choiceTwo: "Other arrays",
        choiceThree: "Objects",
        choiceFour: "All of the above",
        correctAnswer: "All of the above"
    },
    {
        question: "A very useful tool to debug arrays is:",
        choiceOne: "Breaks",
        choiceTwo: "Terminal/bash",
        choiceThree: "For loops",
        choiceFour: "Console.log",
        correctAnswer: "For loops"
    },
    {
        question: "The following are front-end frameworks except: ",
        choiceOne: "Javascript",
        choiceTwo: "HTML",
        choiceThree: "CSS",
        choiceFour: "SQL",
        correctAnswer: "SQL"
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
    choiceOneDisplayEl.addEventListener("click", function (event) {
        console.log('this', event.target.innerHTML)
            if (event.target.innerHTML == questionsArr[0].correctAnswer) {
                console.log('correct')
            } else if (event.target.innerHTML == questionsArr[1].correctAnswer) {
                console.log('correct 1')
            } else if (event.target.innerHTML == questionsArr[2].correctAnswer) {
                console.log('correct 2')
            } else if (event.target.innerHTML == questionsArr[3].correctAnswer) {
                console.log('correct 3') 
            } else if (event.target.innerHTML == questionsArr[4].correctAnswer) {
                console.log('correct 4')
            } else {
                console.log('wrong')
            }
    })
    
    choiceTwoDisplayEl.addEventListener("click", function (event) {
        console.log('this', event.target.innerHTML)
        if (event.target.innerHTML == questionsArr[0].correctAnswer) {
            console.log('correct')
        } else if (event.target.innerHTML == questionsArr[1].correctAnswer) {
            console.log('correct 1')
        } else if (event.target.innerHTML == questionsArr[2].correctAnswer) {
            console.log('correct 2')
        } else if (event.target.innerHTML == questionsArr[3].correctAnswer) {
            console.log('correct 3') 
        } else if (event.target.innerHTML == questionsArr[4].correctAnswer) {
            console.log('correct 4')
        } else {
            console.log('wrong')
        }
    })
    
    choiceThreeDisplayEl.addEventListener("click", function (event) {
        console.log('this', event.target.innerHTML)
        if (event.target.innerHTML == questionsArr[0].correctAnswer) {
            console.log('correct')
        } else if (event.target.innerHTML == questionsArr[1].correctAnswer) {
            console.log('correct 1')
        } else if (event.target.innerHTML == questionsArr[2].correctAnswer) {
            console.log('correct 2')
        } else if (event.target.innerHTML == questionsArr[3].correctAnswer) {
            console.log('correct 3') 
        } else if (event.target.innerHTML == questionsArr[4].correctAnswer) {
            console.log('correct 4')
        } else {
            console.log('wrong')
        }
    })
    
    choiceFourDisplayEl.addEventListener("click", function (event) {
        console.log('this', event.target.innerHTML)
        if (event.target.innerHTML == questionsArr[0].correctAnswer) {
            console.log('correct')
        } else if (event.target.innerHTML == questionsArr[1].correctAnswer) {
            console.log('correct 1')
        } else if (event.target.innerHTML == questionsArr[2].correctAnswer) {
            console.log('correct 2')
        } else if (event.target.innerHTML == questionsArr[3].correctAnswer) {
            console.log('correct 3') 
        } else if (event.target.innerHTML == questionsArr[4].correctAnswer) {
            console.log('correct 4')
        } else {
            console.log('wrong')
        }
    })
    

    