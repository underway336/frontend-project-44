import { cons, car, cdr } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import getRandomNumber from '../utils.js';

const runBrainProgression = () => {
  const rules = 'What number is missing in the progression?';

  const arrOfRandProgLengths = [5, 6, 7, 8, 9, 10];
  const getRoundArr = [];

  let countOfRounds = 0;
  while (countOfRounds !== 3) {
    const startProgression = getRandomNumber(2, 50);
    const progressionStep = getRandomNumber(2, 10);

    const progLength = arrOfRandProgLengths.at(getRandomNumber(0, 5));
    const randomIndex = getRandomNumber(0, progLength);

    const getProgression = () => {
      const progression = [];
      let number = startProgression;
      for (let cycleCounter = 0; cycleCounter < progLength; cycleCounter += 1) {
        number += progressionStep;
        progression.push(number);
      }
      return progression;
    };

    const progression = getProgression(startProgression, progLength, progressionStep);

    const missingNumber = progression.at(randomIndex);
    const pair = cons(missingNumber, '..');
    const resProgression = [];

    for (let index = 0; index < progLength; index += 1) {
      if (
        progressionStep === 0 && index === randomIndex && progression[index] === missingNumber
      ) {
        resProgression.push(cdr(pair));
        index += 1;
      }
      if (progression[index] === missingNumber && progressionStep !== 0) {
        resProgression.push(cdr(pair));
      } else {
        resProgression.push(progression[index]);
      }
    }

    const progressionToString = resProgression.join(' ');

    const questionToUser = (`Question: ${progressionToString}`);

    const correctAnswer = car(pair);

    const getRound = cons(questionToUser, correctAnswer);
    getRoundArr.push(getRound);

    countOfRounds += 1;
  }
  return basicGeneralFunctionality(rules, getRoundArr);
};

export default runBrainProgression;
