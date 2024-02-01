import { runGame } from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCalc = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber(1, 25);
  const number2 = getRandomNumber(1, 25);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`.toString();
  const answer = getCalc(number1, operator, number2).toString();
  return [question, answer];
};

const runBrainCalc = () => runGame(rules, getRound);

export default runBrainCalc;
