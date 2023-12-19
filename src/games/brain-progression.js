import { cons, car, cdr } from '@hexlet/pairs';
import {
  greeting,
  rulesOfTheGame,
  questionToUser,
  getProgression,
  getRandomNumber,
  userAnswer,
  answerIsCorrect,
  congratulations,
  wrongAnswer,
  wrongAnswerTryAgain,
  userCorrectAnswer,
  numberOfRepetitions,
  maxNumberOfCorrectAnswers,
  stepSize,
} from '../index.js';

greeting();

rulesOfTheGame('What number is missing in the progression?');

let repetitionCounter = 0;

for (repetitionCounter; repetitionCounter < numberOfRepetitions; repetitionCounter += stepSize) {
  const progressionMinValue = 0;
  const progressionMaxValue = 50;
  const startProgression = getRandomNumber(progressionMinValue, progressionMaxValue);

  const minSizeProgressionStep = 0;
  const maxSizeProgressionStep = 10;
  const progressionStep = getRandomNumber(minSizeProgressionStep, maxSizeProgressionStep);

  const arrayOfRandomProgLengths = [5, 6, 7, 8, 9, 10];

  const minIndexValue = 0;
  const maxIndexValue = 5;
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

  if (solution === correctAnswer) {
    answerIsCorrect();

    if (repetitionCounter === maxNumberOfCorrectAnswers) {
      congratulations();
    }
  } else {
    wrongAnswer(solution, correctAnswer);
    wrongAnswerTryAgain();
    break;
  }
}
