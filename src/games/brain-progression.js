import { runGame } from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const number = start + step * i;
    progression.push(number);
  }
  return progression;
};

const getRound = () => {
  const start = getRandomNumber(2, 50);
  const step = getRandomNumber(2, 10);
  const length = getRandomNumber(5, 10);
  const progression = getProgression(start, length, step);

  const randomIndex = getRandomIndex(progression);
  const missingNumber = progression[randomIndex];
  progression[randomIndex] = '..';

  const answer = missingNumber.toString();
  const question = progression.join(' ');

  return [question, answer];
};

const runBrainProgression = () => runGame(rules, getRound);

export default runBrainProgression;
