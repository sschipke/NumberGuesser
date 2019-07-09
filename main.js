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
var randomNum = null;
getRandomNumber();
disableClearButton();

/**********Event Listeners*************/

guessOne.addEventListener('keyup',disableClearButton);
guessTwo.addEventListener('keyup',disableClearButton);
nameOne.addEventListener('keyup',disableClearButton);
clearBtn.addEventListener('click', clearGame);
clearBtn.addEventListener('click', disableClearButton);
resetBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', disableClearButton);
resetBtn.addEventListener('click', getRandomNumber);
submitGuess.addEventListener('click', submit);
submitGuess.addEventListener('click', displayGuessErr1);
submitGuess.addEventListener('click', displayGuessErr2);
submitGuess.addEventListener('click', compareNumbers1);
submitGuess.addEventListener('click', compareNumbers2);
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
    resetBtn.disabled = true;
    resetBtn.classList.remove("hover");
    resetBtn.classList.add("disabled");
    disableResetButton();
    } else { enableClearButton(), enableResetButton()}
  };

function enableClearButton() {
clearBtn.disabled = false;
clearBtn.classList.remove("disabled");
clearBtn.classList.add("hover");
enableResetButton();
}

function disableResetButton() {
    resetBtn.disabled = true;
    resetBtn.classList.add("disabled");
    resetBtn.classList.remove("hover")
}
 

function enableResetButton() {
  resetBtn.disabled = false;
  resetBtn.classList.remove("disabled");
  resetBtn.classList.add("hover")
}

function clearGame() {
  guessOne.value = null;
  guessTwo.value = null;
}

function resetGame() {
  minRange.value = null;
  maxRange.value = null;
  guessOne.value = null;
  guessTwo.value = null;
  nameOne.value = null;
  nameTwo.value = null;
}

function submit() {
  challenger1Name.innerText = nameOne.value;
  challenger2Name.innerText = nameTwo.value;
  guess1Out.innerText = guessOne.value;
  guess2Out.innerText = guessTwo.value;
  displayGuessErr1();
  displayGuessErr2();
  isNotANumber();
}

function isNotANumber() {
  if (guessOne.value === 'e') {
    console.log(guessOne.value)
    errorMessage1.innerText = "Error: Not a number!";
    errorMessage1.hidden = false;
  } else {
    errorMessage1.hidden = true;
  }
}

function compareNumbers1() {
  if (parseInt(guessOne.value) < randomNum) { guessMessage1.innerText = "That's too low!"
  } else if (parseInt(guessOne.value) > randomNum) {
    guessMessage1.innerText = "That's too high!"
  } else if (parseInt(guessOne.value) === randomNum) {
    guessMessage1.innerText = "BOOM!"
    appendWinnerCard();
  }
}

function compareNumbers2() {
  if (parseInt(guessTwo.value) < randomNum) {
    guessMessage2.innerText = "That's too low!"
  } else if (parseInt(guessTwo.value) > randomNum) {
    guessMessage2.innerText = "That's too high!"
  } else if (parseInt(guessTwo.value) === randomNum) {
    guessMessage2.innerText = "BOOM!"
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
    errorMessage1.hidden = false;
  } else if (
    parseInt(guessOne.value) > parseInt(maxRange.value)) {
      errorMessage1.hidden = false;
    } else (errorMessage1.hidden = true)
}
    
function displayGuessErr2() {
  if (parseInt(guessTwo.value) < parseInt(minRange.value)) {
    errorMessage2.hidden = false;
  } else if (
    parseInt(guessTwo.value) > parseInt(maxRange.value)) {
    errorMessage2.hidden = false
  } else (errorMessage2.hidden = true)
}

function displayRange() {
  span1.innerText = minRange.value;
  span2.innerText = maxRange.value;
}

function displayRangeErr() {
  if (parseInt(minRange.value) > parseInt(maxRange.value)) {
    rangeErrorMin.hidden = false;
    rangeErrorMin.innerText = "Invalid Range!"
  } else if (minRange.value === "" || maxRange.value === "") {
    rangeErrorMin.innerText = "Please enter two values!"
    rangeErrorMin.hidden = false;
  } else {
    rangeErrorMin.hidden = true; 
  }
}

function appendWinnerCard() {
  if (guessMessage1.innerText === "BOOM!" || guessMessage2.innerText === "BOOM!") {
  winnerCardDisplay.insertAdjacentHTML(
    "afterbegin", `<article class="section__right--art1">
      <div class="art1__paragraphs">
        <p class="art1__p--name1">CHALLENGER 1 NAME</p>
        <p class="art1__p--vs"> vs </p>
        <p class="art1__p3--name2">CHALLENGER 2 NAME</p>
      </div>
      <h5 class="art1__h5--name">CHALLENGER NAME</h5>
      <h5 class="art1__h5--winner">WINNER</h5>
      <div class="art1__displyinfo">
        <p class="art1__guessNumber"><span class="art1__spans"> X </span>GUESSES</p>
        <p class="art1__minTime"><span class="art1__spans"> X </span>MINUTES</p>
        <button class="art1__deletebtn">X</button>
      </div>
    </article>`);
  }
}