// computer will generate random letters
// initial win loss guesses are 0
//user will guess number
//compare user's guess 
//if user's win, win number increment
//if user loose, loose  number increment
$(document).ready(function(){
var guessLetters =[];//letters that have been guessed so far

var wins = 0;//number of wins so far
var losses = 0;//number of losses so far

var numberOfGuessesLeft = 10; //number of intial guesses

var computerLetter = "";

//aray of letters = ["a","b","c","d"];

////////////////////////////////////////////////////
//computer generate random letter
var arrayOfLetters = ["a","b","c","d","e"];

var lengthofletters = arrayOfLetters.length;

var randomLetter = arrayOfLetters[Math.floor(Math.random() * lengthofletters)];
////////////////////////////////////////////

console.log(randomLetter);
//user guess random letter
document.onkeydown = function(event){

    //capture key press and make it lowercase
    var userguess = event.key.toLowerCase();

    guessLetters.push(userguess);

    //after every guess, decrease number of guesses left by 1
    numberOfGuessesLeft--;


    //userguess
    //randomletter


    //user guessed correctly
    if(userguess == randomLetter){
        wins++;
    }
    //user guessed incorrectly
    else if(numberOfGuessesLeft == 0){
        losses++;
    }

    updatePage();
};

var updatePage = function(){
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#Guesses").text(numberOfGuessesLeft);
    $("#yourGuesseSoFar").text(guessLetters.toString());
};

updatePage();

});
//random number = 1;
// of letarrayter[random number]