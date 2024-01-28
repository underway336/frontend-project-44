import { cons } from '@hexlet/pairs';
import { roundsCount } from './index.js';

export const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomNumber;
};

export const generateRounds = (getRound) => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const round = getRound();
    rounds.push(cons(round[0], round[1]));
  }
  return rounds;
};
