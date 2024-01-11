import { basicGeneralFunctionality } from '../index.js';
import { runBrainGame } from '../utils.js';

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

const runBrainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return basicGeneralFunctionality(rules, runBrainGame(isPrimeNumber));
};

export default runBrainPrime;
