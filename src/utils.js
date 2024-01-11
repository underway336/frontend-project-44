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

export const runBrainGame = (questionCallback) => {
  const roundsArray = [];
  for (let i = 0; i < roundCount; i += 1) {
    const displayNumber = getRandomNumber(2, 100);
    roundsArray.push(getRound(`Question: ${displayNumber}`, questionCallback(displayNumber)));
  }
  return roundsArray;
};
