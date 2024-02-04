import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const number = getRandomNumber(2, 100);

  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const runBrainEven = () => runGame(rules, getRound);

export default runBrainEven;
