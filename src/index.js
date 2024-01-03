import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { checkNaN } from './utils.js';

export const basicGeneralFunctionality = (rules, getRoundArr) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  let isCorrect = true;

  for (let countOfRounds = 0; countOfRounds < 3 && isCorrect; countOfRounds += 1) {
    console.log(car(getRoundArr[countOfRounds]));

    const userAnswer = checkNaN(readlineSync.question('Your answer: '));

    const correctAnswer = cdr(getRoundArr[countOfRounds]);

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      isCorrect = false;
    } else {
      console.log('Correct!');
    }
  }

  if (isCorrect) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default basicGeneralFunctionality;
