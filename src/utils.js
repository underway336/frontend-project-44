import { cons } from '@hexlet/pairs';

export const checkNaN = (userAnswer) => {
  let solution = Number(userAnswer);

  if (Number.isNaN(solution) === true) {
    solution = userAnswer;
  }
  return solution;
};

export const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomNumber;
};

export const getRound = (question, correctAnswer) => {
  const round = cons(question, correctAnswer);
  return round;
};

export const roundCount = 3;
