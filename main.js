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

guessOne.addEventListener('keyup',enableClearButton);
guessTwo.addEventListener('keyup',enableClearButton);
nameOne.addEventListener('keyup',enableClearButton);


function enableClearButton() {
     var inputFields = [guessOne.value, guessTwo.value, nameOne.value];
     if (inputFields.includes('')) {
          clearBtn.disabled = true;
          clearBtn.classList.add('disabled');
          console.log(inputFields);
          return;
     }
     else {
          clearBtn.disabled = false;
          clearBtn.classList.remove('disabled');
     }
};


