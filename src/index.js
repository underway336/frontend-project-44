import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { checkNaN } from './utils.js';

export const basicGeneralFunctionality = (rules, roundsArray) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const roundCount = 3;
  let isCorrect = true;

  for (let i = 0; i < roundCount && isCorrect; i += 1) {
    console.log(car(roundsArray[i]));

    const userAnswer = checkNaN(readlineSync.question('Your answer: '));

    const correctAnswer = cdr(roundsArray[i]);

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
