import {
  greeting,
  rulesOfTheGame,
  getRandomNumber,
  questionToUser,
  getGcd,
  userAnswer,
  userCorrectAnswer,
  numberOfRepetitions,
  stepSize,
  isCorrect,
} from '../index.js';

greeting();

rulesOfTheGame('Find the greatest common divisor of given numbers.');

let repetitionCounter = 0;

for (repetitionCounter; repetitionCounter < numberOfRepetitions; repetitionCounter += stepSize) {
  const minValue = 1;
  const maxValue = 100;
  const number1 = getRandomNumber(minValue, maxValue);
  const number2 = getRandomNumber(minValue, maxValue);

  questionToUser(`Question: ${number1} ${number2}`);

  const stringSolution = userAnswer();
  const solution = userCorrectAnswer(stringSolution);

  const correctAnswer = getGcd(number1, number2);

  const result = isCorrect(solution, correctAnswer, repetitionCounter);

  if (result === false) break;
}
