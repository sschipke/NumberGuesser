var minRange = document.querySelector(".section1__input--min");
var maxRange = document.querySelector('.section1__input--max');
var guessOne = document.querySelector('.section2__guess1--input');
var guessTwo = document.querySelector('.section2__guess2--input');
var clearBtn = document.querySelector('.section2__clear--btn');
var nameOne = document.querySelector('.section2__name1--input');
var nameTwo = document.querySelector('.section2__name2--input');
var resetBtn = document.querySelector('.section2__reset--btn');
var submitGuess = document.querySelector('.section2__submit--btn');
enableClearButton();
getRandomNumber();


/**********Event Listeners*************/

guessOne.addEventListener('keyup',enableClearButton);
guessTwo.addEventListener('keyup',enableClearButton);
nameOne.addEventListener('keyup',enableClearButton);

/************Functions***************/

function getRandomNumber(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  var randomNum = Math.floor((Math.random() * 100) + 1);
  console.log(randomNum);
  return randomNum;
}

function enableClearButton() {
  var inputFields = [guessOne.value, guessTwo.value, nameOne.value];
  if (inputFields.includes('')) {
    clearBtn.disabled = true;
    clearBtn.classList.add('disabled');
    return;
    }else{
      clearBtn.disabled = false;
      clearBtn.classList.remove('disabled');
    }
};


