import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (displayNumber) => {
  const minimumPrimeNumber = 2;
  if (displayNumber < minimumPrimeNumber) {
    return 'no';
  }
  const squareRoot = Math.round(Math.sqrt(displayNumber));
  for (let divider = minimumPrimeNumber; divider <= squareRoot; divider += 1) {
    if (displayNumber % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getRound = () => {
  const displayNumber = getRandomNumber(2, 100);

  const question = displayNumber.toString();
  const answer = isPrimeNumber(displayNumber);
  return [question, answer];
};

const runBrainPrime = () => runGame(rules, getRound);

export default runBrainPrime;
