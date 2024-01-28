import { runGame } from '../index.js';
import { getRandomNumber, generateRounds } from '../utils.js';

const getCalc = (number1, operator, number2) => {
  let correctAnswer = 0;
  // eslint-disable-next-line default-case
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
  }
  return correctAnswer;
};

const getRound = () => {
  const number1 = getRandomNumber(1, 25);
  const number2 = getRandomNumber(1, 25);
  const symbols = ['+', '-', '*'];
  const operator = symbols[getRandomNumber(0, 2)];

  return [`Question: ${number1} ${operator} ${number2}`, getCalc(number1, operator, number2)];
};

const runBrainCalc = () => {
  const rules = 'What is the result of the expression?';
  const rounds = generateRounds(getRound);
  return runGame(rules, rounds);
};

export default runBrainCalc;
