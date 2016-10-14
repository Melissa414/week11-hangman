var inquirer = require("inquirer");
var require = ("./word.js", "./letter.js", "game.js");
console.log("This works, baby!")

function Hangman(guess, answer, word, correct, wrong, game) {
    this.guess = guess,
        this.answer = answer,
        this.word = word,
        this.correct = correct,
        this.wrong = wrong,
        this.game = game,

        this.guess = function() {
            if (guess == correct) {
                for (var i = 0; i < 5; i++) {
                    this.correct++;
                    console.log("Correct, what will be your next guess?")
                    console.log("\n------------------------------------")
                } else {
                    wrong++;
                    console.log("Try again.")
                    console.log("\n------------------------------------")
                }
            }
        }
        this.word = function() {
            
        }
}