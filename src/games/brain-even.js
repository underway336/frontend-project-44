import {
  greeting,
  rulesOfTheGame,
  questionToUser,
  userAnswer,
  isEven,
  answerIsCorrect,
  congratulations,
  wrongAnswer,
  wrongAnswerTryAgain,
  getRandomNumber,
  numberOfRepetitions,
  maxNumberOfCorrectAnswers,
  stepSize,
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
