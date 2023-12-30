import { cons } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const runGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const minValue = 1;
  const maxValue = 100;

  const getRoundArr = [];

  let countOfRounds = 0;
  while (countOfRounds !== 3) {
    const number1 = getRandomNumber(minValue, maxValue);
    const number2 = getRandomNumber(minValue, maxValue);

    const questionToUser = (`Question: ${number1} ${number2}`);

    const getGcd = () => {
      let res = 0;
      let max = Math.max(number1, number2);
      let min = Math.min(number1, number2);
      let remainder;

      while (remainder !== 0) {
        remainder = max % min;
        max = min;
        min = remainder;
        res = max;
      }
      return res;
    };

    const correctAnswer = getGcd(number1, number2);

    const getRound = cons(questionToUser, correctAnswer);
    getRoundArr.push(getRound);

    countOfRounds += 1;
  }
  return basicGeneralFunctionality(rules, getRoundArr);
};

export default runGcd;
