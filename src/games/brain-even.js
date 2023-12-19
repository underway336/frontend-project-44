import {
  greeting,
  rulesOfTheGame,
  questionToUser,
  userAnswer,
  isEven,
  getRandomNumber,
  numberOfRepetitions,
  stepSize,
  isCorrect,

} from '../index.js';

greeting();

rulesOfTheGame('Answer "yes" if the number is even, otherwise answer "no".');

let repetitionCounter = 0;

const minValue = 1;
const maxValue = 100;

for (repetitionCounter; repetitionCounter < numberOfRepetitions; repetitionCounter += stepSize) {
  const number = getRandomNumber(minValue, maxValue);

  questionToUser(`Question: ${number}`);

  const solution = userAnswer();
  const correctAnswer = isEven(number);

  const result = isCorrect(solution, correctAnswer, repetitionCounter);

  if (result === false) break;
}
