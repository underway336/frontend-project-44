import { runGame } from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (displayNumber) => {
  const correctAnswer = displayNumber % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const getRound = () => {
  const displayNumber = getRandomNumber(2, 100);

  const question = displayNumber.toString();
  const answer = isEven(displayNumber).toString();
  return [question, answer];
};

const runBrainEven = () => runGame(rules, getRound);

export default runBrainEven;
