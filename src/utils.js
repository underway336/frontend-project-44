import { cons } from '@hexlet/pairs';

export const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomNumber;
};

export const getRound = (question, correctAnswer) => {
  const round = cons(question, correctAnswer);
  return round;
};

export const runBrainGame = (questionCallback, roundsCount) => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const displayNumber = getRandomNumber(2, 100);
    rounds.push(getRound(`Question: ${displayNumber}`, questionCallback(displayNumber)));
  }
  return rounds;
};
