var minRange = document.querySelector(".section1__input--min");
var maxRange = document.querySelector('.section1__input--max');
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
submitGuess.addEventListener('click', submit)



function getRandomNumber(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  var randomNum = Math.floor((Math.random() * 100) + 1);
  console.log(randomNum);
  return randomNum;
}

/************Functions***************/

function getRandomNumber(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  var randomNum = Math.floor((Math.random() * 100) + 1);
  console.log(randomNum);
  return randomNum;
}

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


