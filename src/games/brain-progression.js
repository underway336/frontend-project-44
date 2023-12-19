import { cons, car, cdr } from '@hexlet/pairs';
import {
  greeting,
  rulesOfTheGame,
  questionToUser,
  getProgression,
  getRandomNumber,
  userAnswer,
  userCorrectAnswer,
  numberOfRepetitions,
  stepSize,
  isCorrect,
} from '../index.js';

greeting();

rulesOfTheGame('What number is missing in the progression?');

let repetitionCounter = 0;

const progressionMinValue = 0;
const progressionMaxValue = 50;

const minSizeProgressionStep = 0;
const maxSizeProgressionStep = 10;

const arrayOfRandomProgLengths = [5, 6, 7, 8, 9, 10];

const minIndexValue = 0;
const maxIndexValue = 5;

for (repetitionCounter; repetitionCounter < numberOfRepetitions; repetitionCounter += stepSize) {
  const startProgression = getRandomNumber(progressionMinValue, progressionMaxValue);

  const progressionStep = getRandomNumber(minSizeProgressionStep, maxSizeProgressionStep);

  const progLength = arrayOfRandomProgLengths.at(getRandomNumber(minIndexValue, maxIndexValue));
  const randomIndex = getRandomNumber(minIndexValue, progLength);

  const progression = getProgression(
    startProgression,
    progressionStep,
    progLength,
  );

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

  questionToUser(`Question: ${progressionToString}`);

  const stringSolution = userAnswer();
  const solution = userCorrectAnswer(stringSolution);

  const correctAnswer = car(pair);

  const result = isCorrect(solution, correctAnswer, repetitionCounter);

  if (result === false) break;
}
