import { basicGeneralFunctionality } from '../index.js';
import { getRandomNumber, getRound, roundCount } from '../utils.js';

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
  const roundsArray = [];

  for (let i = 0; i < roundCount; i += 1) {
    const displayNumber = getRandomNumber(2, 100);
    roundsArray.push(getRound(`Question: ${displayNumber}`, isPrimeNumber(displayNumber)));
  }
  return basicGeneralFunctionality(rules, roundsArray);
};

export default runBrainPrime;
