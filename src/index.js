import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const runGame = (rules, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    console.log(car(rounds[i]));

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(rounds[i]).toString();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runGame;
