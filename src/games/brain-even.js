import { cons } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const runBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const minValue = 2;
  const maxValue = 100;

  const getRoundArr = [];

  let countOfRounds = 0;
  while (countOfRounds !== 3) {
    const displayNumber = getRandomNumber(minValue, maxValue);
    const questionToUser = (`Question: ${displayNumber}`);

    const isEven = () => {
      const result = displayNumber % 2 === 0 ? 'yes' : 'no';
      return result;
    };

    const correctAnswer = isEven();
    const getRound = cons(questionToUser, correctAnswer);

    getRoundArr.push(getRound);

    countOfRounds += 1;
  }
  return basicGeneralFunctionality(rules, getRoundArr);
};

export default runBrainEven;
