import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  const minimumPrimeNumber = 2;
  if (number < minimumPrimeNumber) {
    return 'no';
  }
  const squareRoot = Math.round(Math.sqrt(number));
  for (let divider = minimumPrimeNumber; divider <= squareRoot; divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getRound = () => {
  const number = getRandomNumber(2, 100);

  const question = number.toString();
  const answer = isPrimeNumber(number);
  return [question, answer];
};

const runBrainPrime = () => runGame(rules, getRound);

export default runBrainPrime;
