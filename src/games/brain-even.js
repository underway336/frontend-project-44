import {
    greeting,
    rulesOfTheGame,
    questionToUser,
    userAnswer,
    answerIsCorrect,
    congratulations,
    wrongAnswer,
    wrongAnswerTryAgain,
    getRandomNumber,
} from '../index.js';

greeting();

rulesOfTheGame('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();

    const isEven = () => {
        const res = number % 2 === 0 ? 'yes' : 'no';
        return res;
    };

    questionToUser(`Question: ${number}`);

    const solution = userAnswer();

    const correctAnswer = isEven();

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
