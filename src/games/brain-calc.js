import {
  greeting,
  rulesOfTheGame,
  questionToUser,
  getRandomNumber,
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

rulesOfTheGame('What is the result of the expression?');

let repetitionCounter = 0;

for (repetitionCounter; repetitionCounter < numberOfRepetitions; repetitionCounter += stepSize) {
  const minValue = 0;
  const maxValue = 25;
  const number1 = getRandomNumber(minValue, maxValue);
  const number2 = getRandomNumber(minValue, maxValue);

  const symbols = ['+', '-', '*'];
  const minOperatorIndexValue = 0;
  const maxOperatorIndexValue = 3;
  const operator = symbols.at(getRandomNumber(minOperatorIndexValue, maxOperatorIndexValue));

  questionToUser(`Question: ${number1} ${operator} ${number2}`);

  let correctAnswer = 0;

  switch (operator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      correctAnswer = number1 * number2;
      break;
  }

  const stringSolution = userAnswer();
  const solution = userCorrectAnswer(stringSolution);

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
