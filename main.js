var inquirer = require("inquirer");
var require = ("./word.js", "./letter.js", "./game.js");
console.log("\n------------------------------------");
console.log("   Let's play a game...")
console.log("------------------------------------");
console.log("\n");

var loop = 0;
var lettersMatched = [];
var letters = [];
var correct = [];
var wrong = [];
var guesses = 7;
var guessesLeft = 0;

function Hangman(guess, answer, word, correct, wrong, game, score) {
        this.guess = guess,
        this.answer = answer,
        this.word = word,
        this.correct = correct,
        this.wrong = wrong,
        this.game = game,
        this.score = score,

        this.guess = function() {
            if (this.guess === correct) {
                //five guesses
                for (var i = 0; i < 5; i++) {
                    //adds one point to the winning score
                    correct++;
                }
            } else {
                //adds one point to the losing score
                wrong++;
            }
        }

}

    lettersGuessed = function(guess) {
        for (var i = 0; i < wordsToGuess.length; i++) {
            if (guess === true) {
                    //adds one point to the winning score
                correct++;
                letters.push(answer.correct);
                console.log("Hey, " + this.name + "you got one! What will be your next guess?");
                console.log("\n------------------------------------");


        } else {
                //adds one point to the losing score
                wrong++;
                letters.push(answer.wrong);
                console.log(this.name + ",try again.")
                console.log("\n------------------------------------")

            }
    }
}

    updatedGuess = function(update) {

            this.lettersGuessed.push(letters);
            this.guesses--;
        }

    inquirer.prompt([
            {
                type: "input",
                message: " Hello! What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: " Type in a letter: ",
                name: "letter"
            },
]).then(function(answers) {
    var gameOne = new Hangman(answers.name, answers.letter);

    });
