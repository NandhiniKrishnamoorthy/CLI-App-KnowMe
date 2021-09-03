//******creating Quiz********

var chalk = require('chalk');
var readLineSync = require('readline-sync');
var score = 0;

var highScores = [
    {
        name: "Nandhini",
        score: 7,
    },
    {
        name: "Prasath",
        score: 6,
    }
]

function welcome() {

    var userName = readLineSync.question("May I know your Name! ");
    console.log("\nWelcome " + chalk.yellow.bold(userName));

    if (readLineSync.keyInYN("\nDo you know Nandhini? ")) {
        console.log("Answer these 7 questions and check how much you know about me!")
        quiz();
        scores();
    }
    else {
        console.log("\nThanks! Try next time");
        //process.exit();        
    }
}

//Display questions
function game(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (answer.toUpperCase() === userAnswer.toUpperCase()) {
        console.log(chalk.bold.green("Correct! "));
        score = score + 1;
    } else {
        console.log(chalk.red.bold("Wrong"));
    }
    console.log("Your current score is: " + score);
    console.log("----------------------------------")
}


function quiz() {
    //questionList
    quizQuestion = [
        {
            question: "\n1. Where Do I Live? ",
            answer: "Chennai",
        },
        {
            question: "\n2. Where do I Work? ",
            answer: "Infosys",
        },
        {
            question: "\n3. Who is my Mentor? ",
            answer: "Tanay",
        },
        {
            question: "\n4. Who is my favourite Hero? ",
            answer: "KamalHasan",
        },
        {
            question: "\n5. What is my favourite colour? ",
            answer: "blue",
        },
        {
            question: "\n6. What is my favourite food? ",
            answer: "fishfry"
        },
        {
            question: "\n7. what is my hobby? ",
            answer: "Painting",
        }
    ]

    for (i = 0; i < quizQuestion.length; i++) {
        game(quizQuestion[i].question, quizQuestion[i].answer);
    }
}

//Display highscores
function scores() {
    console.log(chalk.bold.bgMagenta("\nCONGRATULATIONS! You Scored " + score));
    console.log("\nCheck out the highscores, Ping me if you reached that, I'll update your score");

    for (i = 0; i < highScores.length; i++) {
        console.log(highScores[i].name + " : " + highScores[i].score);
    }

}

welcome();
