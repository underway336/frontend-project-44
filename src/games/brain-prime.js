import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minimumPrimeNumber = 2;

const isPrimeNumber = (number) => {
  if (number < minimumPrimeNumber) {
    return false;
  }
  const checksCount = Math.round(Math.sqrt(number));
  for (let divider = minimumPrimeNumber; divider <= checksCount; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const number = getRandomNumber(-100, 100);

  const question = number.toString();
  const answer = isPrimeNumber(number) ? 'yes' : 'no';
  return [question, answer];
};

const runBrainPrime = () => runGame(rules, getRound);

export default runBrainPrime;
