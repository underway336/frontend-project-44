import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const runGame = (rules, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const round = getRound();
    console.log(round[0]);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = round[1];

    console.log('Correct!');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
