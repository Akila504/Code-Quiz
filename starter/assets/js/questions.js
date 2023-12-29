const questionContainerElement = document.getElementById("questions")
const pageTitle = document.querySelector('h1')
const startButton = document.querySelector("#start");
const startScreen = document.querySelector('#start-screen');
let questionTitle = document.getElementById('question-title');
let answerOptions = document.getElementById('choices')

let unoList = document.createElement('ul')
//Changing the name of the quiz 
pageTitle.innerText = "Harry Potter Coding Quiz"

//FIRST SECTION 

// Set of questions --> array of objects
// Each question needs the following:
// Question text
// Set of answers
// Which answer is correct 

let question = [
  {
    title: 'What does Harry accidentally do when he goes to the zoo?',
    choices: ['Make the glass in the snake enclosure dissapear', 'Turns a flamingo blue', 'Teaches the Monkey to sing'],
    correctAnswer: 0
  },
  {
    title: "What's Harry's mum Lily's surname before she marries Harry's dad ?",
    choices: ['Peters', 'Evans', 'Collins'],
    correctAnswer: 1
  },
  {
    title: ("What's the name of Dudley Dursely's dad ?"),
    choices: ['Vernon', 'Victor', 'Ivan'],
    correctAnswer: 0
  },
  {
    title: ("What is the name of Hermione Granger's cat ? "),
    choices: ['Bernard', 'Crookshanks', 'Luna'],
    correctAnswer: 1
  },
  {
    title: ("How many brothers and sisters does Ron Weasley have ?"),
    choices: ['8', '7', '6'],
    correctAnswer: 2
  },
  {
    title: ('Who is the oldest Weasley Brother?'),
    choices: ['Percy', 'Charlie', 'Bill'],
    correctAnswer: 2
  }
]





//SECOND SECTION 
// Landing page:
// Explanation of the quiz
// Start button

// Click the start button:
// Landing page goes away
// Timer starts
// The first question appears (with its answers)  


startButton.addEventListener('click', function (event) {
  event.preventDefault()
  event.stopPropagation()
  startScreen.classList.add("hide")
  questionContainerElement.classList.remove("hide")
  showQuestion()
})


function showQuestion() {
  let questionNumber = 0;
  //when the question number is 0 
  //We want to get the question 0 and the choices at question 0 
  //add button elements to the list items 
  //so when the button is clicked we go to the next question 
  //When the user click a question we go to the next question 
  //if the user Clicks the correct choice we signal correct else wrong

  questionTitle.innerText = question[0].title;
  //  // for (let i = 0; i < question.length; i++) {
  // questionTitle.innerText= question[i].title;    

  for (let i = 0; i < 3; i++) {
    let answers = document.createElement('li')
    answers.innerText = question[0].choices[i]
    console.log(answers)
    unoList.appendChild(answers)
    answerOptions.appendChild(unoList)

    answers.addEventListener('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      if (question[0].correctAnswer == i) {
        console.log("you are right")
      }
      else { console.log("try again") }
    })
  }
}




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
