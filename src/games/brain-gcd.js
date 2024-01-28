import { runGame } from '../index.js';
import { getRandomNumber, generateRounds } from '../utils.js';

const getGcd = (number1, number2) => {
  let result = 0;
  let max = Math.max(number1, number2);
  let min = Math.min(number1, number2);
  let remainder;

  while (remainder !== 0) {
    remainder = max % min;
    max = min;
    min = remainder;
    result = max;
  }
  return result;
};
const getRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  return [`Question: ${number1} ${number2}`, getGcd(number1, number2)];
};
const runBrainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const rounds = generateRounds(getRound);
  return runGame(rules, rounds);
};

export default runBrainGcd;
