import { cons, car, cdr } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (startProgression, progLength, progressionStep) => {
  const progression = [];
  for (let i = 0; i < progLength; i += 1) {
    const number = startProgression + progressionStep * i;
    progression.push(number);
  }
  return progression;
};

const runBrainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const roundCount = 3;
  const getRound = [];

  for (let i = 0; i < roundCount; i += 1) {
    const startProgression = getRandomNumber(2, 50);
    const progressionStep = getRandomNumber(2, 10);
    const progLength = getRandomNumber(5, 10);
    const progression = getProgression(startProgression, progLength, progressionStep);

    const randomIndex = getRandomNumber(0, (progLength - 1));
    const missingNumber = progression[randomIndex];
    const pair = cons(missingNumber, '..');
    const resultProgression = [];

    for (let index = 0; index < progLength; index += 1) {
      if (
        index === randomIndex && progression[index] === missingNumber
      ) {
        resultProgression.push(cdr(pair));
        index += 1;
      }
      if (progression[index] === missingNumber) {
        resultProgression.push(cdr(pair));
      } else {
        resultProgression.push(progression[index]);
      }
    }
    const questionToUser = `Question: ${resultProgression.join(' ')}`;
    const correctAnswer = car(pair);
    getRound.push(cons(questionToUser, correctAnswer));
  }
  return basicGeneralFunctionality(rules, getRound);
};

export default runBrainProgression;
