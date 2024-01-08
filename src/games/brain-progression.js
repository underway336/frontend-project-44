import { cons, car, cdr } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (startProgression, progLength, progressionStep) => {
  let number = startProgression;
  const progression = [number];
  for (let cycleCounter = 1; cycleCounter < progLength; cycleCounter += 1) {
    number += progressionStep;
    progression.push(number);
  }
  return progression;
};

const runBrainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const roundCount = 3;
  const arrOfRandProgLengths = [5, 6, 7, 8, 9, 10];
  const getRoundArr = [];

  for (let i = 0; i < roundCount; i += 1) {
    const startProgression = getRandomNumber(2, 50);
    const progressionStep = getRandomNumber(2, 10);
    const progLength = arrOfRandProgLengths[getRandomNumber(0, 5)];
    const randomIndex = getRandomNumber(0, (progLength - 1));

    const progression = getProgression(startProgression, progLength, progressionStep);
    const missingNumber = progression[randomIndex];
    const pair = cons(missingNumber, '..');
    const resProgression = [];

    for (let index = 0; index < progLength; index += 1) {
      if (
        index === randomIndex && progression[index] === missingNumber
      ) {
        resProgression.push(cdr(pair));
        index += 1;
      }
      if (progression[index] === missingNumber) {
        resProgression.push(cdr(pair));
      } else {
        resProgression.push(progression[index]);
      }
    }

    const progressionToString = resProgression.join(' ');
    const questionToUser = `Question: ${progressionToString}`;
    const correctAnswer = car(pair);

    const getRound = cons(questionToUser, correctAnswer);
    getRoundArr.push(getRound);
  }
  return basicGeneralFunctionality(rules, getRoundArr);
};

export default runBrainProgression;
