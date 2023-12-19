import {
  greeting,
  rulesOfTheGame,
  questionToUser,
  getRandomNumber,
  isPrimeNumber,
  userAnswer,
  numberOfRepetitions,
  stepSize,
  isCorrect,
} from '../index.js';

greeting();

rulesOfTheGame('Answer "yes" if given number is prime. Otherwise answer "no".');

let repetitionCounter = 0;

const minValue = 2;
const maxValue = 71;

for (repetitionCounter; repetitionCounter < numberOfRepetitions; repetitionCounter += stepSize) {
  const displayNumber = getRandomNumber(minValue, maxValue);

  questionToUser(`Question: ${displayNumber}`);

  const solution = userAnswer();
  const correctAnswer = isPrimeNumber(displayNumber);

  const result = isCorrect(solution, correctAnswer, repetitionCounter);

  if (result === false) break;
}
