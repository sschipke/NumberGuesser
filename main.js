var minRange = document.querySelector(".section1__input--min");
var maxRange = document.querySelector('.section1__input--max');
var guessOne = document.querySelector('.section2__guess1--input');
var guessTwo = document.querySelector('.section2__guess2--input');
var clearBtn = document.querySelector('.section2__clear--btn');

guessOne.addEventListener('keyup',enableClearButton);
guesstwo.addEventListener('keyup', enableClearButton);


function enableClearButton() {
     var inputFields = [guessOne.value, guessTwo.value];
     if (inputFields.includes('')) {
          clearBtn.disabled = true;
          clearBtn.classList.add('disabled')
          return;
     }
     else {
          clearBtn.disabled = false;
          clearBtn.classList.remove('disabled');
     }
}
enableClearButton();

object.onload = enableClearButton();
