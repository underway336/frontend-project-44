import { cons } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const runBrainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const minValue = 2;
  const maxValue = 100;

  const getRoundArr = [];

  let countOfRounds = 0;
  while (countOfRounds !== 3) {
    const displayNumber = getRandomNumber(minValue, maxValue);
    const questionToUser = (`Question: ${displayNumber}`);

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

    const getRound = cons(questionToUser, correctAnswer);
    getRoundArr.push(getRound);

    countOfRounds += 1;
  }
  return basicGeneralFunctionality(rules, getRoundArr);
};

export default runBrainPrime;
