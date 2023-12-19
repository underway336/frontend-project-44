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
} from '../index.js';

greeting();

rulesOfTheGame('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const displayNumber = getRandomNumber(0, 71);

  questionToUser(`Question: ${displayNumber}`);

  const solution = userAnswer();
  const correctAnswer = isPrimeNumber(displayNumber);

  if (solution === correctAnswer) {
    answerIsCorrect();

    if (i === 2) {
      congratulations();
    }
  } else {
    wrongAnswer(solution, correctAnswer);
    wrongAnswerTryAgain();
    break;
  }
}
