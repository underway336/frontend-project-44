import {
    greeting,
    rulesOfTheGame,
    questionToUser,
    userAnswer,
    isEven,
    answerIsCorrect,
    congratulations,
    wrongAnswer,
    wrongAnswerTryAgain,
    getRandomNumber,
} from '../index.js';

greeting();

rulesOfTheGame('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(0, 100);

    questionToUser(`Question: ${number}`);

    const solution = userAnswer();
    const correctAnswer = isEven(number);

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
