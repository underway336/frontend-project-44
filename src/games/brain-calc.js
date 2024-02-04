import { runGame } from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

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
  const randomIndex = getRandomIndex(operators);

  const operator = operators[randomIndex];

  const question = `${number1} ${operator} ${number2}`;
  const answer = getCalc(number1, operator, number2).toString();
  return [question, answer];
};

const runBrainCalc = () => runGame(rules, getRound);

export default runBrainCalc;
