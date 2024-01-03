import { cons, car, cdr } from '@hexlet/pairs';
import { basicGeneralFunctionality } from '../index.js';
import { genRandNumbWithZero, getRandomNumber } from '../utils.js';

const runBrainProgression = () => {
  const rules = 'What number is missing in the progression?';

  const progressionMinValue = 2;
  const progressionMaxValue = 50;

  const minSizeProgressionStep = 2;
  const maxSizeProgressionStep = 10;

  const arrOfRandProgLengths = [5, 6, 7, 8, 9, 10];

  const minIndexValue = 0;
  const maxIndexValue = 5;

  const getRoundArr = [];

  let countOfRounds = 0;
  while (countOfRounds !== 3) {
    const startProgression = getRandomNumber(progressionMinValue, progressionMaxValue);

    const progressionStep = getRandomNumber(minSizeProgressionStep, maxSizeProgressionStep);

    const progLength = arrOfRandProgLengths.at(genRandNumbWithZero(minIndexValue, maxIndexValue));
    const randomIndex = genRandNumbWithZero(minIndexValue, progLength);

    const getProgression = () => {
      const progression = [];
      let number = startProgression;
      const step = 1;
      for (let cycleCounter = 0; cycleCounter < progLength; cycleCounter += step) {
        number += progressionStep;
        progression.push(number);
      }
      return progression;
    };

    const progression = getProgression();

    const missingNumber = progression.at(randomIndex);
    const pair = cons(missingNumber, '..');
    const resProgression = [];

    const step = 1;

    for (let index = 0; index < progLength; index += step) {
      if (
        progressionStep === 0 && index === randomIndex && progression[index] === missingNumber
      ) {
        resProgression.push(cdr(pair));
        index += step;
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
