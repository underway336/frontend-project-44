import {
  greeting,
  isEven,
  rulesOfTheGame,
  askQuestionAndCheckAnswer,
} from '../index.js';

greeting();

rulesOfTheGame('Answer "yes" if the number is even, otherwise answer "no".');

askQuestionAndCheckAnswer(2, 100, isEven, (displayNumber) => isEven(displayNumber));
