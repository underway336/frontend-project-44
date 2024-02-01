import { runGame } from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (displayNumber) => {
  const correctAnswer = displayNumber % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const getRound = () => {
  const displayNumber = getRandomNumber(2, 100).toString();

  return [`Question: ${displayNumber}`, isEven(displayNumber)];
};

const runBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const round = getRound;
  return runGame(rules, round);
};

export default runBrainEven;
