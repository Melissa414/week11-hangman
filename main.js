var inquirer = require("inquirer");
var require = ("./word.js", "./letter.js", "./game.js");
console.log("\n------------------------------------");
console.log("   Let's play a game...")
console.log("------------------------------------");

function Hangman(guess, answer, word, correct, wrong, game, score) {
    this.guess = guess,
        this.answer = answer,
        this.word = word,
        this.correct = correct,
        this.wrong = wrong,
        this.game = game,
        this.score = score,

        this.game = function() {
            if (guess === correct) {
                //only 5 words to guess, currently
                for (var i = 0; i < 5; i++) {
                    //adds one point to the winning score
                    correct++;
                    console.log("Hey, " + this.name + "Correct, what will be your next guess?");
                    console.log("\n------------------------------------");
                }
            } else {
                //adds one point to the losing score
                wrong++;
                console.log(this.name + ",try again.")
                console.log("\n------------------------------------")
            }
        }

}

    inquirer.prompt([

            {
                type: "input",
                message: " Type in a letter: ",
                name: "entering"
            },
])
// var loop = 0;
// var letterGuess = [];
// var letter = [];

    lettersMatched = function(correct) {
        if (letter == true) {
            letter.push(answer.correct);
            console.log("Correct!");
            console.log("\n------------------------------------")
                }
            }