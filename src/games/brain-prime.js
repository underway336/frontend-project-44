import {
  greeting,
  rulesOfTheGame,
  askQuestionAndCheckAnswer,
  isPrimeNumber,
} from '../index.js';

greeting();

rulesOfTheGame('Answer "yes" if given number is prime. Otherwise answer "no".');

askQuestionAndCheckAnswer(2, 71, isPrimeNumber, (displayNumber) => isPrimeNumber(displayNumber));
