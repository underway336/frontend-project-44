import { cons, car, cdr } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import { getRandomNumber, getRound, roundCount } from '../utils.js';

const getProgression = (start, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const number = start + step * i;
    progression.push(number);
  }
  return progression;
};

const getMissingNumber = (progression, index) => cons(progression[index], '..');

const replaceMissingNumber = (progression, missingNumber) => {
  const resultProgression = [];
  for (let i = 0; i < progression.length; i += 1) {
    const number = progression[i];
    if (number === car(missingNumber)) {
      resultProgression.push(cdr(missingNumber));
    } else {
      resultProgression.push(number);
    }
  }
  return resultProgression;
};

const runBrainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const roundsArray = [];

  for (let i = 0; i < roundCount; i += 1) {
    const start = getRandomNumber(2, 50);
    const step = getRandomNumber(2, 10);
    const length = getRandomNumber(5, 10);
    const progression = getProgression(start, length, step);

    const randomIndex = getRandomNumber(0, (length - 1));
    const missingNumber = getMissingNumber(progression, randomIndex);
    const resultProgression = replaceMissingNumber(progression, missingNumber);
    roundsArray.push(getRound(`Question: ${resultProgression.join(' ')}`, car(missingNumber)));
  }
  return basicGeneralFunctionality(rules, roundsArray);
};

export default runBrainProgression;
