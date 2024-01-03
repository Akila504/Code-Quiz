
//select the highscores ordered list 
const highScorehistory = document.getElementById("highscores");

const clearBtn = document.getElementById('clear')

//retrive the highscores oredered list from local storage
let StoredJson = JSON.parse(localStorage.getItem('testJson'))

//sort the storedJSON object by score
var sortedJson = StoredJson.sort(function (a, b) {
  return b.score - a.score
});
console.log(sortedJson);


//create an lI elements and append the initial and score
for (let i = 0; i < sortedJson.length; i++) {
  var li = document.createElement('li')
  li.textContent = `${sortedJson[i].initial} -${sortedJson[i].score}`
  highScorehistory.appendChild(li)
}

//add event listener for when the clear button is clicked 

clearBtn.addEventListener("click", function (event) {
  event.preventDefault()
  localStorage.clear();
  highScorehistory.innerText = ''
})
