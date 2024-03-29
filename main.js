var minRange = document.querySelector(".section1__input--min");
var maxRange = document.querySelector('.section1__input--max');
var updateBtn =  document.querySelector('.section1__left--btn')
var guessOne = document.querySelector('.section2__guess1--input');
var guessTwo = document.querySelector('.section2__guess2--input');
var clearBtn = document.querySelector('.section2__clear--btn');
var nameOne = document.querySelector('.section2__name1--input');
var nameTwo = document.querySelector('.section2__name2--input');
var resetBtn = document.querySelector('.section2__reset--btn');
var submitGuess = document.querySelector('.section2__submit--btn');
var challenger1Name = document.querySelector('.article1__h4');
var challenger2Name = document.querySelector('.article2__h4');
var guess1Out = document.querySelector('.article1__out');
var guess2Out = document.querySelector('.article2__out');
var upDateBtn = document.querySelector('.section1__left--btn')
var guessMessage1 = document.querySelector('.article1__p2');
var guessMessage2 = document.querySelector('.article2__p2');
var errorMessage1 = document.querySelector('.guess__error1');
var errorMessage2 = document.querySelector('.guess__error2');
var span1 = document.querySelector('.section2__span1');
var span2 = document.querySelector('.section2__span2');
var rangeErrorMin = document.querySelector('.error__minRange');
var winnerCardDisplay = document.querySelector('.main__right');
var nameErr1 = document.querySelector('.section2__name1--err1');
var nameErr2 = document.querySelector('.section2__name2--err2');
var mainRight = document.querySelector('.main__right');
var winner = ""
var guessCounter = 0;
var randomNum = null;
getRandomNumber();
disableClearButton();
disableResetButton();

/**********Event Listeners*************/

guessOne.addEventListener('keyup',disableClearButton);
guessTwo.addEventListener('keyup',disableClearButton);
nameOne.addEventListener('keyup',disableClearButton);
clearBtn.addEventListener('click', clearGame);
clearBtn.addEventListener('click', disableClearButton);
resetBtn.addEventListener('click', disableClearButton);
resetBtn.addEventListener('click', resetHandler);
submitGuess.addEventListener('click', submit);
upDateBtn.addEventListener('click', updateRangeInputs);

/************Functions***************/

function getRandomNumber() {
  randomNum = Math.floor((Math.random() * 100) + 1);
  return randomNum;
}
console.log(randomNum)

function disableClearButton() {
  var inputFields = [guessOne.value, guessTwo.value, nameOne.value, nameTwo.value];
  if (inputFields.includes("")) {
    clearBtn.disabled = true;
    clearBtn.classList.remove("hover");
    clearBtn.classList.add("disabled");
    }else{enableClearButton()}
};
  
function clearGame() {
  guessOne.value = null;
  guessTwo.value = null;
}
  
function resetHandler() {
  getRandomNumber();
  guessCounter = 0;
  disableResetButton();
  resetInputs();
  removeBorders();
  hideErrorMessages();
  disableClearButton();
  console.log(randomNum)
  }

function resetInputs() {
  minRange.value = null;
  maxRange.value = null;
  guessOne.value = null;
  guessTwo.value = null;
  nameOne.value = null;
  nameTwo.value = null;
  resetOutputs();
} 

function resetOutputs() {
  guess1Out.innerText = "#";
  guess2Out.innerText = "#";
  challenger1Name.innerText = "Challenger 1 Name";
  challenger2Name.innerText = "Challenger 2 Name";
  guessMessage1.innerText = "Let's Play Again!";
  guessMessage2.innerText = "Let's Play Again!";
  span1.innerText = "1";
  span2.innerText = "100";
}

function guessCount() {
  guessCounter++
}

function enableClearButton() {
  clearBtn.disabled = false;
  clearBtn.classList.remove("disabled");
  clearBtn.classList.add("hover");
}

function disableResetButton() {
  if (guessCounter > 0){
    console.log(guessCounter)
    enableResetButton();
  }else{
    resetBtn.disabled = true;
    resetBtn.classList.add("disabled");
    resetBtn.classList.remove("hover")
  }
}

function enableResetButton() {
  resetBtn.disabled = false;
  resetBtn.classList.remove("disabled");
  resetBtn.classList.add("hover")
}

function submit() {
  challenger1Name.innerText = nameOne.value;
  challenger2Name.innerText = nameTwo.value;
  guess1Out.innerText = guessOne.value;
  guess2Out.innerText = guessTwo.value;
  guessCount();
  checkCorrectName1();
  checkCorrectName2();
  displayName1Err();
  displayName2Err();
  displayGuessErr1();
  displayGuessErr2();
  disableResetButton();
}

function checkCorrectName1() {
  if (nameOne.value === ""){
    challenger1Name.innerText = "?";
    guess1Out.innerText = "?"
    return;
  }
}

function checkCorrectName2() {
  if (nameTwo.value === ""){
    challenger2Name.innerText = "?";
    guess2Out.innerText = "?";
    return;
  }else{
  }
}

function compareNumbers(guess, help) {
  var playerGuess = parseInt(guess.value);
  var helpMessage = help;
  if (playerGuess < randomNum) {
  helpMessage.innerText = "That's too low!"
  } else if (playerGuess > randomNum) {
    helpMessage.innerText = "That's too high!"
  } else if (playerGuess === randomNum) {
    helpMessage.innerText = "BOOM!"
    winnerName();
    appendWinnerCard();
  }
}

function updateRangeInputs() {
  var min = parseInt(minRange.value);
  var max = parseInt(maxRange.value);
  randomNum = Math.floor((Math.random() * (max - min + 1)) + min);
  console.log('random number', randomNum);
  displayRange(); 
  displayRangeErr();
  return randomNum;
}

function displayGuessErr1() {
  if (parseInt(guessOne.value) < parseInt(minRange.value)) {
    turnOnGuessRangeErr1();
  } else if (
    parseInt(guessOne.value) > parseInt(maxRange.value)) {
    turnOnGuessRangeErr1();
  } else if (guessOne.value === "") {
    turnOnEmptyGuessErr1();
  } else {
  errorMessage1.hidden = true;
  guessOne.classList.remove('border');
  compareNumbers(guessOne, guessMessage1)
  }
}

function turnOnGuessRangeErr1() {
  guess1Out.innerText = "X";
  errorMessage1.hidden = false;
  errorMessage1.innerText = "Error: Not in range!";
  guessOne.classList.add('border');
}

function turnOnEmptyGuessErr1() {
  guess1Out.innerText = "?";
  errorMessage1.hidden = false;
  errorMessage1.innerText = "Please enter a number!";
  guessOne.classList.add('border');
}
  
function displayGuessErr2() {
  if (parseInt(guessTwo.value) < parseInt(minRange.value)) {
    turnOnGuessRangeErr2();
  } else if (
    parseInt(guessTwo.value) > parseInt(maxRange.value)) {
    turnOnGuessRangeErr2();
  } else if (guessTwo.value === "") {
    turnOnEmptyGuessErr2();
  } else {
  errorMessage2.hidden = true;
  compareNumbers(guessTwo,guessMessage2)
  guessTwo.classList.remove('border');
  }
}

function turnOnGuessRangeErr2() {
  guess2Out.innerText = "X";
  errorMessage2.hidden = false;
  errorMessage2.innerText = "Error: Not in range!";
  guessTwo.classList.add('border');
}

function turnOnEmptyGuessErr2() {
  guess2Out.innerText = "?"
  errorMessage2.hidden = false;
  errorMessage2.innerText = "Please enter a number!";
  guessTwo.classList.add('border');
}

function displayRange() {
  span1.innerText = minRange.value;
  span2.innerText = maxRange.value;
}

function displayRangeErr() {
  if (parseInt(minRange.value) > parseInt(maxRange.value)) {
    rangeErrorMin.hidden = false;
    rangeErrorMin.innerText = "Invalid Range!"
    minRange.classList.add('border');
    maxRange.classList.add('border');
  } else if (minRange.value === "" || maxRange.value === "") {
    rangeErrorMin.innerText = "Please enter two values!"
    rangeErrorMin.hidden = false;
    minRange.classList.add('border');
    maxRange.classList.add('border');
  } else {
    rangeErrorMin.hidden = true; 
    minRange.classList.remove('border');
    maxRange.classList.remove('border');
  }
}

function displayName1Err() {
  if (nameOne.value === "") {
    nameErr1.hidden = false;
    nameOne.classList.add('border');
  } else {
    nameErr1.hidden = true;
    nameOne.classList.remove('border');
  }
}

function displayName2Err() {
  if (nameTwo.value === "") {
    nameErr2.hidden = false;
    nameTwo.classList.add('border');
  } else {
    nameErr2.hidden = true;
    nameTwo.classList.remove('border');
  }
}

function removeBorders() {
  guessOne.classList.remove('border');
  guessTwo.classList.remove('border');  
  nameOne.classList.remove('border');
  nameTwo.classList.remove('border');
  minRange.classList.remove('border');
  maxRange.classList.remove('border');
}

function hideErrorMessages() {
  errorMessage1.hidden = true;
  errorMessage2.hidden = true;
  nameErr1.hidden = true;
  nameErr2.hidden = true;
  rangeErrorMin.hidden = true;
}

function appendWinnerCard() {
  if (guessMessage1.innerText === "BOOM!" || guessMessage2.innerText === "BOOM!") {
  winnerCardDisplay.insertAdjacentHTML(
    "afterbegin", `<article class="section__right--art1">
      <div class="art1__paragraphs">
        <p class="art1__p--name1">${nameOne.value}</p>
        <p class="art1__p--vs"> vs </p>
        <p class="art1__p3--name2">${nameTwo.value}</p>
      </div>
      <h5 class="art1__h5--name">${winner}</h5>
      <h5 class="art1__h5--winner">WINNER</h5>
      <div class="art1__displyinfo">
        <p class="art1__guessNumber"><span class="art1__spans"> ${guessCounter} </span>GUESSES</p>
        <p class="art1__minTime"><span class="art1__spans"> X </span>MINUTES</p>
        <button class="art1__deletebtn">X</button>
      </div>
    </article>`);
  }
}

function winnerName() {
  if (parseInt(guessOne.value) === randomNum){
    winner = nameOne.value;
  }else{
    winner = nameTwo.value;
  }
}

mainRight.addEventListener('click', function(event) { 
  var articleRight = document.querySelector('.section__right--art1') 
  if(event.target.className === 'art1__deletebtn') { 
    articleRight.remove(); 
  };
});