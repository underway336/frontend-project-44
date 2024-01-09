import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { checkNaN } from './utils.js';

export const basicGeneralFunctionality = (rules, roundsArray) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    console.log(car(roundsArray[i]));

    const userAnswer = checkNaN(readlineSync.question('Your answer: '));
    const correctAnswer = cdr(roundsArray[i]);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default basicGeneralFunctionality;
