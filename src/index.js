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
    const answerForm = readlineSync.question(`Your answer: `);
    return answerForm;
};

export const answerIsCorrect = () => console.log('Correct!');

export const wrongAnswer = (wrongSolution, expectedAnswer) => {
    console.log(
        `'${wrongSolution}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`
    );
};

export const wrongAnswerTryAgain = () => {
    console.log(`Let's try again, ${userName}!`);
};

export const congratulations = () =>
    console.log(`Congratulations, ${userName}!`);

export const getRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min));
    return randomNumber;
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
