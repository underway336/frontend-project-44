import { cons } from '@hexlet/pairs';
import { roundsCount, runGame } from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (displayNumber) => {
  const result = displayNumber % 2 === 0 ? 'yes' : 'no';
  return result;
};

const runBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const displayNumber = getRandomNumber(2, 100);
    rounds.push(cons(`Question: ${displayNumber}`, isEven(displayNumber)));
  }
  return runGame(rules, rounds);
};

export default runBrainEven;
