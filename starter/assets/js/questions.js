const questionContainerElement = document.getElementById("questions")
const pageTitle = document.querySelector('h1')
const startButton = document.querySelector("#start");
const startScreen = document.querySelector('#start-screen');
let questionTitle = document.getElementById('question-title');
let answerOptions = document.getElementById('choices')
const timeEl = document.getElementById('time')
const endScreen = document.getElementById('end-screen')
const finalScore = document.getElementById('final-score')
const submitButton = document.getElementById('submit')

const feedback = document.getElementById("feedback")


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
//we first set the second left 
// in the event of the start button getting click we hide the starscreen and start the game by unhiding the questions 


let secondsLeft = 100;

startButton.addEventListener('click', function (event) {
  event.preventDefault()
  event.stopPropagation()
  startScreen.classList.add("hide")
  questionContainerElement.classList.remove("hide")




  const timerInteval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    //if the recordScore =1 then we clear the interval i.e when we have reached the last question before time has run out
    if (recordScore === (1)) {
      finalScore.innerText = secondsLeft
      clearInterval(timerInteval);
    }
    // clear the interval if the time = 0
    if (secondsLeft === 0) {
      clearInterval(timerInteval);
      endScreen.classList.remove("hide")
      questionContainerElement.classList.add("hide")
      finalScore.innerText = secondsLeft


    }
  }, 1000);


  showQuestion()

})

let questionNumber = 0;
let recordScore = 0;


function showQuestion() {
  //create list elements to store the answers  
  //loop through the length of the answers and append to the ul

  questionTitle.innerText = question[questionNumber].title;

  function displayAnswers() {
    for (let i = 0; i < 3; i++) {
      let answers = document.createElement('li')
      answers.innerText = question[questionNumber].choices[i]
      console.log(answers)
      unoList.appendChild(answers)
      answerOptions.appendChild(unoList)

      //event listener for click of answer   
      //if the user is right we notify they are correct else we notify they are incorrect

      answers.addEventListener('click', function (event) {
        event.preventDefault()
        event.stopPropagation()

        if (question[questionNumber].correctAnswer == i) {
          console.log("you are right")

          feedback.textContent = "you are right"
          feedback.classList.remove("hide")
          setTimeout('feedback.classList.add("hide")', 1000)

        }
        else {
          console.log("you are wrong")
          secondsLeft = secondsLeft - 10
          feedback.classList.remove("hide")
          feedback.textContent = "you are wrong"
          setTimeout('feedback.classList.add("hide")', 1000)
        }





        //if the questions has not reached the last question we want to going to the next question in the event of a click of answer

        if (questionNumber < (question.length - 1)) {
          questionNumber = questionNumber + 1
          questionTitle.innerText = question[questionNumber].title
          unoList.innerText = ''
        }
        //If we reach the last question then we want to go to the end screen after click of answer   
        else {
          recordScore = 1
          endScreen.classList.remove("hide")
          questionContainerElement.classList.add("hide")
        }







        displayAnswers()


      })
    }
  }

  displayAnswers()

}


//3RD SECTION  

//WHEN THE SUBMIT BUTTON IS CLICKED THE USER IS TAKEN TO THE HIGHSCOES PAGE  
//where the the users initials values is set into an object in an array along with the score 
//which is set in local storage 
//if there is already data in local storage this will concat the previous data with the current data and set into local storage

submitButton.addEventListener('click', function () {
  window.location.href = 'highscores.html';

  let userinit = document.getElementById('initials').value

  let myScore = [{
    initial: userinit,
    score: finalScore.innerText
  }]

  let StoredJson = JSON.parse(localStorage.getItem('testJson'))

  if (StoredJson !== null) {
    myScore = StoredJson.concat(myScore)

    localStorage.setItem("testJson", JSON.stringify(myScore))
  } else {
    localStorage.setItem("testJson", JSON.stringify(myScore))
  }

})








