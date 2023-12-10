import {
    greeting,
    rulesOfTheGame,
    getRandomNumber,
    questionToUser,
    getGcd,
    userAnswer,
    answerIsCorrect,
    congratulations,
    wrongAnswer,
    wrongAnswerTryAgain,
} from '../index.js';

greeting();

rulesOfTheGame('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(0, 100);
    const number2 = getRandomNumber(0, 100);

    questionToUser(`Question: ${number1} ${number2}`);

    const stringSolution = userAnswer();

    let solution = Number(stringSolution);

    if (Number.isNaN(solution) === true) {
        solution = stringSolution;
    }

    const correctAnswer = getGcd(number1, number2);

    if (solution === correctAnswer) {
        answerIsCorrect();

        if (i === 2) {
            congratulations();
        }
    } else {
        wrongAnswer(solution, correctAnswer);
        wrongAnswerTryAgain();
        break;
    }
}
