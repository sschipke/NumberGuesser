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
var guessMessage1 = document.querySelector('.article1__p2');
var guessMessage2 = document.querySelector('.article2__p2')
var randomNum = null;

getRandomNumber();
enableClearButton();
getRandomNumber();


/**********Event Listeners*************/

guessOne.addEventListener('keyup',enableClearButton);
guessTwo.addEventListener('keyup',enableClearButton);
nameOne.addEventListener('keyup',enableClearButton);
clearBtn.addEventListener('click', clearGame);
clearBtn.addEventListener('click', enableClearButton);
resetBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', enableClearButton);
resetBtn.addEventListener('click', getRandomNumber);
submitGuess.addEventListener('click', submit);
submitGuess.addEventListener('click', compareNumbers1);
submitGuess.addEventListener('click', compareNumbers2);



/************Functions***************/

function getRandomNumber(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  randomNum = Math.floor((Math.random() * 100) + 1);
  return randomNum;
}
console.log(randomNum)

function enableClearButton() {
     var inputFields = [guessOne.value, guessTwo.value, nameOne.value, guessTwo.value];
     if (inputFields.includes('')) {
          clearBtn.disabled = true;
          clearBtn.classList.add('disabled');
          resetBtn.disabled=true;
          resetBtn.classList.add('disabled')
          return;
     }
     else {
          clearBtn.disabled = false;
          clearBtn.classList.remove('disabled');
          resetBtn.disabled = false;
          resetBtn.classList.remove('disabled');
     }
};

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
}
 function compareNumbers1() {
      if (parseInt(guessOne.value) < randomNum) { guessMessage1.innerText = "That's too low!"
     } else if (parseInt(guessOne.value) > randomNum) {
          guessMessage1.innerText = "That's too high!"
     } else if (parseInt(guessOne.value) === randomNum) {
          guessMessage1.innerText = 'BOOM!'
     }
 }

function compareNumbers2() {
     if (parseInt(guessTwo.value) < randomNum) {
     guessMessage2.innerText = "That's too low!"
     } else if (parseInt(guessTwo.value) > randomNum) {
          guessMessage2.innerText = "That's too high!"
     } else if (parseInt(guessTwo.value) === randomNum) {
          guessMessage2.innerText = 'BOOM!'
     }
}


