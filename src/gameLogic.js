const chalk = "chalk"; //to add color to CLI 

//To connect trivia gameLogic
const { select, input } = require("@inquirer/prompts"); //use to take inupt from user
const { triviaQuestions } =require("./triviaQuestions.js"); //to get trivia questions
const { triviaStats } = require ("src/triviaStats.js"); //to show trivia game user stats

//To Display Main Menu of Trivia Game
async function showMainMenu() {
  const action = await select({
    message: "Welcome to Harry Potter Trivia",
    choices: [ //menu options
      { name: "Play Harry Potter Trivia", value: "play" },
      { name: "See Score and Check Stats", value: "stats" },
      { name: "Exit", value: "exit" },
    ],
  });

//What to execute based on option selection in the Main Menu:
  switch (action) { 
    case "start":
      await playGame(triviaQuestions);
      break;//to terminate loop so it does not keep running after selection
    case "stats":
      showStats(triviaStats);
      await select({ message: "Press Enter to go back", choices: [{ name: "Back", value: "back" }] });
      showMainMenu();//return to main menu
      break;
    case "exit":
      console.log("Goodbye! Can't wait for your return to Hogwarts");
      process.exit(0);
  }
}

//*self reference to triviaQuestions.js
//triviaQuestions - Array of Objec
//key-question, key-options - values Array of 4 options, key-correctAnswer


//Logic for Game:
async function startQuiz(quizQuestions, userAnswers){
   
    //Dispays question and get players input to story in playerAnswer ARRAY
    for(const triviaObject in triviaQuestions) {
        //Set up time constraint for questions
        const timesUp = setTimeout(function() {
            console.log(chalk.red("Times Up!"));
        }, 10000); //10 seconds per question

        //If time is not up them display question to answer, else terminate question
        if(timesUp => 0){
            triviaQuestions.forEach((key) => {
                if(question === key) {
                    console.log(triviaQuestions.question)
                };            
            });
            triviaQuestions.forEach((key) => {
                console.log(triviaQuestions.options)
            });
           
            const answer = await input({message: triviaObject.question}); 
            playerAnswers.push(answer) 
        } else{
            break; 
        }        
    };
    //stop the timer if all of the questions have been answered
    clearTimeout(timesUp) ;
};  

//Make sure stats are updated to show correct answers and wrong answers
function updatedStats(playerAnswers, triviaQuestions, triviaStats) {
  for (let i = 0; i < quizQuestions.length; i++) {
    const triviaAnswer = (triviaQuestions[i].correctAnswers);
    const playerAnswers = (playerAnswers[i]);
    
    //update trivia stats based on playersAnswers
    if(triviaAnswer === playerAnswers) {
       triviaStats.stats.answeredCorrect += 1;
    } 
    else {
       triviaStats.stats.answeredWrong +=1
       triviaStats.questionsMissed.push(triviaQuestions[i])
    }
  }
}


function displayStats(triviaStats) {
  console.log("Quiz Score");
  console.log(chalk.green(`Answered Correctly: ${triviaStats.stats.answeredCorrect}`))
  console.log(chalk.red(`Answered Wrong: ${triviaStats.stats.answeredWrong}`))
  console.log(chalk.yellow(`Missed Questions:" ${triviaStats.stats.questionsMissed}`))
};

//Reset trivia game stats
function resetStats(triviaStats,playerAnswers) {
    if(playerAnswers.length = 0) {
    triviaStats.stats.answeredCorrect = 0;
    triviaStats.stats.answeredWrong = 0;
    triviaStats.questionsMissed = 0;
    }  
}

//Game ends go back to Main Menu
module.exports = { showMainMenu };

