import { basicGeneralFunctionality } from '../index.js';
import { getRandomNumber, getRound, roundCount } from '../utils.js';

const getGcd = (number1, number2) => {
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

const runBrainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const roundsArray = [];

  for (let i = 0; i < roundCount; i += 1) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    roundsArray.push(getRound(`Question: ${number1} ${number2}`, getGcd(number1, number2)));
  }
  return basicGeneralFunctionality(rules, roundsArray);
};

export default runBrainGcd;
