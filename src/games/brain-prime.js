import { cons } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const runBrainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundCount = 3;
  const getRound = [];

  for (let i = 0; i < roundCount; i += 1) {
    const displayNumber = getRandomNumber(2, 100);

    const isPrimeNumber = () => {
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

    const correctAnswer = isPrimeNumber();
    getRound.push(cons(`Question: ${displayNumber}`, correctAnswer));
  }
  return basicGeneralFunctionality(rules, getRound);
};

export default runBrainPrime;
