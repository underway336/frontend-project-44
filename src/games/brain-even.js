import { runGame } from '../index.js';
import { getRandomNumber, generateRounds } from '../utils.js';

const isEven = (displayNumber) => {
  const correctAnswer = displayNumber % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const getRound = () => {
  const displayNumber = getRandomNumber(2, 100);

  return [`Question: ${displayNumber}`, isEven(displayNumber)];
};

const runBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = generateRounds(getRound);
  return runGame(rules, rounds);
};

export default runBrainEven;
