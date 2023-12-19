import {
  greeting,
  rulesOfTheGame,
  questionToUser,
  getRandomNumber,
  isPrimeNumber,
  userAnswer,
  answerIsCorrect,
  congratulations,
  wrongAnswer,
  wrongAnswerTryAgain,
  numberOfRepetitions,
  maxNumberOfCorrectAnswers,
  stepSize,
} from '../index.js';

greeting();

rulesOfTheGame('Answer "yes" if given number is prime. Otherwise answer "no".');

let repetitionCounter = 0;

for (repetitionCounter; repetitionCounter < numberOfRepetitions; repetitionCounter += stepSize) {
  const minValue = 2;
  const maxValue = 71;
  const displayNumber = getRandomNumber(minValue, maxValue);

  questionToUser(`Question: ${displayNumber}`);

  const solution = userAnswer();
  const correctAnswer = isPrimeNumber(displayNumber);

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
