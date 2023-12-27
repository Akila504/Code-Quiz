const questionContainerElement = document.getElementById("questions") 
const pageTitle = document.querySelector('h1')
const startButton = document.querySelector("#start");  
const startScreen = document.querySelector('#start-screen'); 

//Changing the name of the quiz 
pageTitle.innerText = "Harry Potter Coding Quiz"


//need an event listener when the start quiz button is clicked the user is taken to the questions 
/*CREATE QUESTIONS OBJECT*/  



// first we need to have the questions as an object, with arrays so we can have access the seperate questions and options for each anser
// the questions object should have the title of the quesiton, the options of answers and the correct answer 

let question= [ 
  {title: 'What does Harry accidentally do when he goes to the zoo?', 
   choices : ['Make the glass in the snake enclosure dissapear','Turns a flamingo blue', 'Teaches the Monkey to sing'],
   correctAnswer: 1  
  },
  {title: "What's Harry's mum Lily's surname before she marries Harry's dad ?",
   choices : ['Peters','Evans', 'Collins'],
   correctAnswer: 2  
  },
  {title: ("What's the name of Dudley Dursely's dad ?"), 
   choices : ['Vernon','Victor', 'Ivan'],
   correctAnswer: 1  
  },
  {title: ("What is the name of Hermione Granger's cat ? "), 
   choices : ['Bernard','Crookshanks', 'Luna'],
   correctAnswer: 2  
  },
  {title: ("How many brothers and sisters does Ron Weasley have ?"), 
   choices : ['8','7','6'],
   correctAnswer: 3  
  },
  {title: ('Who is the oldest Weasley Brother?'), 
   choices : ['Percy','Charlie','Bill'],
   correctAnswer: 3  
  } 
] 

function showQuestion() { 
let questionTitle = document.getElementById('question-title'); 
questionTitle.innerText = question.title;    
console.log(questionTitle) 
}



startButton.addEventListener('click', function(event) { 
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



// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct

// Landing page:
  // Explanation of the quiz
  // Start button

// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again
