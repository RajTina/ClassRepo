// computer will generate random letters
// initial win loss guesses are 0
//user will guess number
//compare user's guess 
//if user's win, win number increment
//if user losses, loss  number increment
$(document).ready(function(){
var guessLetters =[];//letters that have been guessed so far

var wins = 0;//number of wins so far
var losses = 0;//number of losses so far

var numberOfGuessesLeft = 9; //number of intial guesses
var computerLetter = "";

//aray of letters = ["a","b","c","d"];

////////////////////////////////////////////////////
//computer generate random letter
var arrayOfLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lengthOfLetters = arrayOfLetters.length;
var randomLetter = arrayOfLetters[Math.floor(Math.random() * lengthOfLetters)];

////////////////////////////////////////////

console.log(randomLetter);
//user guess random letter
document.onkeydown = function(event){

    //capture key press and make it lowercase
    console.log("keypressed")
    var userGuess = event.key.toLowerCase();
    if (!arrayOfLetters.includes(userGuess)) {
        console.log("not a letter")
        return false;
    }

    guessLetters.push(userGuess);
    //after every guess, decrease number of guesses left by 1
    if (numberOfGuessesLeft > 0) {
        numberOfGuessesLeft--;
    }
    //after every guess, decrease number of guesses left by 1
    //numberOfGuesses: null;


    //userguess
    //randomletter


    //user guessed correctly
     
    if (numberOfGuessesLeft > 0){
        if(userGuess == randomLetter){
            wins++;
            alert("Wow! congratulation! Try another!");
            reset();
        }

    }
    //}
    //user guessed incorrectly
    else if(numberOfGuessesLeft == 0){
        losses++;
        alert(" Sorry, you're not psychic.. try again!");
        reset();
    }
    
    updatePage();
};

function reset() {
    numberOfGuessesLeft = 9;
    randomLetter = arrayOfLetters[Math.floor(Math.random() * lengthOfLetters)];
    guessLetters =[];
    updatePage();
}

var updatePage = function(){
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#Guesses").text(numberOfGuessesLeft);
    $("#yourGuessesSoFar").text(guessLetters.toString());
    
};

updatePage(); 



});
//random number = 1;
// arrayOfLetter[random number]


