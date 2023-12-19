import readlineSync from 'readline-sync';

let userName = '';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');

  userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};

export const rulesOfTheGame = (rules) => console.log(rules);

export const questionToUser = (question) => console.log(question);

export const userAnswer = () => {
  const answerForm = readlineSync.question('Your answer: ');
  return answerForm;
};

export const answerIsCorrect = () => console.log('Correct!');

export const wrongAnswer = (wrongSolution, expectedAnswer) => {
  console.log(
    `'${wrongSolution}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`,
  );
};

export const wrongAnswerTryAgain = () => {
  console.log(`Let's try again, ${userName}!`);
};

export const congratulations = () => console.log(`Congratulations, ${userName}!`);

export const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue));
  return randomNumber;
};

export const isEven = (number) => {
  const res = number % 2 === 0 ? 'yes' : 'no';
  return res;
};

export const getGcd = (number1, number2) => {
  let res = 0;
  let maxValue = Math.max(number1, number2);
  let minValue = Math.min(number1, number2);
  let remainder;

  while (remainder !== 0) {
    remainder = maxValue % minValue;
    maxValue = minValue;
    minValue = remainder;
    res = maxValue;
  }
  return res;
};

export const getProgression = (
  startProgression,
  progressionStep,
  progressionLength,
) => {
  const progression = [];
  let number = startProgression;
  for (let i = 0; i < progressionLength; i += 1) {
    number += progressionStep;
    progression.push(number);
  }

  return progression;
};

export const userCorrectAnswer = (stringSolution) => {
  let solution = Number(stringSolution);

  if (Number.isNaN(solution) === true) {
    solution = stringSolution;
  }

  return solution;
};

export const isPrimeNumber = (displayNumber) => {
  const minimumPrimeNumber = 2;
  if (displayNumber < minimumPrimeNumber) {
    return 'no';
  }
  const squareRoot = Math.round(Math.sqrt(displayNumber));
  for (let divider = minimumPrimeNumber; divider <= squareRoot; divider += 1) {
    if (displayNumber % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const numberOfRepetitions = 3;
export const maxNumberOfCorrectAnswers = 2;
export const stepSize = 1;
