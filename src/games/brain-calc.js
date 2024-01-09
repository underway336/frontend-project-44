import { cons } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const runBrainCalc = () => {
  const rules = 'What is the result of the expression?';
  const roundCount = 3;
  const getRound = [];

  for (let i = 0; i < roundCount; i += 1) {
    const number1 = getRandomNumber(0, 25);
    const number2 = getRandomNumber(0, 25);

    const symbols = ['+', '-', '*'];
    const operator = symbols[getRandomNumber(0, 2)];

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
    getRound.push(cons(`Question: ${number1} ${operator} ${number2}`, correctAnswer));
  }
  return basicGeneralFunctionality(rules, getRound);
};

export default runBrainCalc;
