import { cons } from '@hexlet/pairs';
import { roundsCount, runGame } from '../index.js';
import getRandomNumber from '../utils.js';

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
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const displayNumber = getRandomNumber(2, 100);
    rounds.push(cons(`Question: ${displayNumber}`, isPrimeNumber(displayNumber)));
  }
  return runGame(rules, rounds);
};

export default runBrainPrime;
