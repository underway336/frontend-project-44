import { cons } from '@hexlet/pairs';
import { runGame, roundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

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
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    rounds.push(cons(`Question: ${number1} ${number2}`, getGcd(number1, number2)));
  }
  return runGame(rules, rounds);
};

export default runBrainGcd;
