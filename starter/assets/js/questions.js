const questionContainerElement = document.getElementById("questions")

const startButton = document.querySelector("#start");  
const startScreen = document.querySelector('#start-screen'); 

//need an event listener when the start quiz button is clicked the user is taken to the questions 
/*CREATE QUESTIONS OBJECT*/ 

// first we need to have the questions as an object, with arrays so we can have access the seperate questions and options for each anser
// the questions object should have the title of the quesiton, the options of answers and the correct answer 

let question= {  
   title: ('which type of function can you not declare before you call it ?'), 
   choices : ['function expression','arrow function', 'function declaration'],
   correctAnswer: 1  
}

function showQuestion() { 
let questionTitle = document.getElementById('question-title'); 
questionTitle.innerText = question.title;    
console.log(questionTitle) 
}



startButton.addEventListener('click', function() { 
  event.preventDefault() 
  event.stopPropagation()  
  startScreen.classList.add("hide") 
  questionContainerElement.classList.remove("hide") 
  showQuestion()
} )




/*FUNCTION for setting the title and question options*/  
// next we need to access title div
//after accessing each title with documnet.getelementby id we can set the inline text to be the title in the object 
// We also need to acess the choices div  
//after accessing each options div with documnet.getelementby id we need to set the inline text options as an unordered list for each item. 




/*WE need an event listener here when a click is performed on the choices div*/ 
//Once on the first question the timer starts*/ 
//if from the list of options the correct answer is not chosen then deduct 10 seconds from time  
//once the choice is made go to the next question*/ 
//if the time reaches zero or if all questions answered then game finishes 




