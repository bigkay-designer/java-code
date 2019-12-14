/*const player= document.querySelector('p');

player.addEventListener('click', updatename);

function updatename(){
    let name = prompt ('enter a new name');

    player.textContent= 'player : ' +name;
}*/

/*const h1= document.querySelector('h1');

const h2= document.querySelector('h2');

const h3= document.querySelector('h3');


h1.addEventListener('click', name);

h2.addEventListener('click', email);

h3.addEventListener('click', number);

function name(){
    let na = prompt('enter your name');

    h1.textContent= 'name : ' +na;
}
function email(){
    let em = prompt('enter your em');

    h2.textContent= 'email : ' +em;
}
function number(){
    let no = prompt('enter your number');

    h3.textContent= 'number : ' +no;
}*/


/*guss the number game */



let randomNumber = Math.floor(Math.random() * 100) + 1; // generate random number between 1 100

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
                                                                    //"const" im selecting HTML classes using the "document.queryselector"
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guesscount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkguess);  //creating an event listenenr

function checkguess(){
    let userguess = Number(guessField.value);
    
    if (guesscount === 1){
        guesses.textContent = 'previous guesses: ';
    }

    guesses.textContent += userguess + ' -- ';

    if (userguess === 20){
        lastResult.textContent = 'congratculation you got it right !!!!';
        lastResult.style.backgroundColor = 'green';
        lastResult.style.padding = '10px 5px';
        lastResult.style.fontSize = '22px'
        lowOrHi.textContent= '';
        setGameOver();
    }


    else if (guesscount === 10){
        lastResult.textContent = 'game over!!!';
        setGameOver();
    }

    else {
        lastResult.textContent = 'wrong';
        lastResult.style.backgroundColor = 'red';
        
        if (userguess < randomNumber){
            lowOrHi.textContent = 'your guess is too low';
        }
        else if(userguess > randomNumber){
            lowOrHi.textContent = 'your guess is too high';
        }
    }



    guesscount++;
    guessField.value;
    guessField.focus();

}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}


function resetGame() {
guesscount = 1;

const resetParas = document.querySelectorAll('.resultParas p');
for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
}

resetButton.parentNode.removeChild(resetButton);

guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = '';
guessField.focus();

lastResult.style.backgroundColor = 'white';

randomNumber = Math.floor(Math.random() * 100) + 1;
}

console.log(checkguess)
