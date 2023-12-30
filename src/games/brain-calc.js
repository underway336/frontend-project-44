import { cons } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const runBrainCalc = () => {
  const rules = 'What is the result of the expression?';

  const minValue = 0;
  const maxValue = 25;

  const getRoundArr = [];

  let countOfRounds = 0;
  while (countOfRounds !== 3) {
    const number1 = getRandomNumber(minValue, maxValue);
    const number2 = getRandomNumber(minValue, maxValue);

    const symbols = ['+', '-', '*'];
    const minOperatorIndexValue = 0;
    const maxOperatorIndexValue = 3;
    const operator = symbols.at(getRandomNumber(minOperatorIndexValue, maxOperatorIndexValue));

    const questionToUser = (`Question: ${number1} ${operator} ${number2}`);

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

    const getRound = cons(questionToUser, correctAnswer);
    getRoundArr.push(getRound);

    countOfRounds += 1;
  }
  return basicGeneralFunctionality(rules, getRoundArr);
};

export default runBrainCalc;
