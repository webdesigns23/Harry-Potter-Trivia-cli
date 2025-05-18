//Trivia Game Stats in array so can access keys and values easier
const triviaStats = {
  stats: {
    answeredCorrect: 0,
    answeredWrong: 0,
    questionsMissed: 0
  },
};

//Keep a logo of players answeres stored in an ARRAY:
let playerAnswers = [];

module.exports = {triviaStats} //Created a module of trivia stats and player answers