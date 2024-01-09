import { cons } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (displayNumber) => {
  const result = displayNumber % 2 === 0 ? 'yes' : 'no';
  return result;
};

const runBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const roundCount = 3;
  const getRound = [];

  for (let i = 0; i < roundCount; i += 1) {
    const displayNumber = getRandomNumber(2, 100);
    getRound.push(cons(`Question: ${displayNumber}`, isEven(displayNumber)));
  }
  return basicGeneralFunctionality(rules, getRound);
};

export default runBrainEven;
