import { basicGeneralFunctionality } from '../index.js';
import { getRandomNumber, getRound, roundCount } from '../utils.js';

const isEven = (displayNumber) => {
  const result = displayNumber % 2 === 0 ? 'yes' : 'no';
  return result;
};

const runBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const roundsArray = [];

  for (let i = 0; i < roundCount; i += 1) {
    const displayNumber = getRandomNumber(2, 100);
    roundsArray.push(getRound(`Question: ${displayNumber}`, isEven(displayNumber)));
  }
  return basicGeneralFunctionality(rules, roundsArray);
};

export default runBrainEven;
