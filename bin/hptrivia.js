#!/usr/bin/env node
const { program } = require("commander");
const { triviaQuestions } = require("../src/triviaQuestions.js");
const { triviaStats } = require("../src/triviaStats.js");
const { showMainMenu } = require("../src/gameLogic.js");

showMainMenu(triviaQuestions, playerAnswers, triviaStats);
