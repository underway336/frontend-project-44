import { runGame } from '../index.js';
import { getRandomNumber, getRound, roundCount } from '../utils.js';

const runBrainCalc = () => {
  const rules = 'What is the result of the expression?';
  const roundsArray = [];

  for (let i = 0; i < roundCount; i += 1) {
    const number1 = getRandomNumber(0, 25);
    const number2 = getRandomNumber(0, 25);

    const symbols = ['+', '-', '*'];
    const operator = symbols[getRandomNumber(0, 2)];

    let correctAnswer = 0;
    // eslint-disable-next-line default-case
    switch (operator) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
    }
    roundsArray.push(getRound(`Question: ${number1} ${operator} ${number2}`, correctAnswer));
  }
  return runGame(rules, roundsArray);
};

export default runBrainCalc;
