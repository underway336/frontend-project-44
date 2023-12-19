import {
  greeting,
  rulesOfTheGame,
  getRandomNumber,
  questionToUser,
  getGcd,
  userAnswer,
  answerIsCorrect,
  congratulations,
  wrongAnswer,
  wrongAnswerTryAgain,
  userCorrectAnswer,
  numberOfRepetitions,
  maxNumberOfCorrectAnswers,
  stepSize,
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

  if (solution === correctAnswer) {
    answerIsCorrect();

    if (repetitionCounter === maxNumberOfCorrectAnswers) {
      congratulations();
    }
  } else {
    wrongAnswer(solution, correctAnswer);
    wrongAnswerTryAgain();
    break;
  }
}
