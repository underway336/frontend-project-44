import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { checkNaN } from './utils.js';

export const roundsCount = 3;
export const runGame = (rules, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    console.log(car(rounds[i]));

    const userAnswer = checkNaN(readlineSync.question('Your answer: '));
    const correctAnswer = cdr(rounds[i]);

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

export default runGame;
