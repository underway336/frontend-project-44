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
