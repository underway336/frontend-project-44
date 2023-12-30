import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { checkNaN } from './utils.js';

export const basicGeneralFunctionality = (rules, getRoundArr) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  let countOfRounds = 0;
  for (countOfRounds; countOfRounds < 3; countOfRounds += 1) {
    console.log(car(getRoundArr[countOfRounds]));

    const userAnswer = checkNaN(readlineSync.question('Your answer: '));

    const correctAnswer = cdr(getRoundArr[countOfRounds]);

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
      break;
    } else {
      console.log('Correct!');
      if (countOfRounds === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};

export default basicGeneralFunctionality;

// export const getProgression = (
//   startProgression,
//   progressionStep,
//   progressionLength,
// ) => {
//   const progression = [];
//   let number = startProgression;
//   const step = 1;
//   let cycleCounter = 0;
//   for (cycleCounter; cycleCounter < progressionLength; cycleCounter += step) {
//     number += progressionStep;
//     progression.push(number);
//   }

//   return progression;
// };

// export const isPrimeNumber = (displayNumber) => {
//   const minimumPrimeNumber = 2;
//   if (displayNumber < minimumPrimeNumber) {
//     return 'no';
//   }
//   const squareRoot = Math.round(Math.sqrt(displayNumber));
//   for (let divider = minimumPrimeNumber; divider <= squareRoot; divider += 1) {
//     if (displayNumber % divider === 0) {
//       return 'no';
//     }
//   }
//   return 'yes';
// };
