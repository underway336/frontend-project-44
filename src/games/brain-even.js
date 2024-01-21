import { roundsCount, runGame } from '../index.js';
import { runBrainGame } from '../utils.js';

const isEven = (displayNumber) => {
  const result = displayNumber % 2 === 0 ? 'yes' : 'no';
  return result;
};

const runBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  return runGame(rules, runBrainGame(isEven, roundsCount));
};

export default runBrainEven;
