import {
    greeting,
    rulesOfTheGame,
    questionToUser,
    getRandomNumber,
    userAnswer,
    answerIsCorrect,
    congratulations,
    wrongAnswer,
    wrongAnswerTryAgain,
    userCorrectAnswer,
} from '../index.js';

greeting();

rulesOfTheGame('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(0, 25);
    const number2 = getRandomNumber(0, 25);

    const symbols = ['+', '-', '*'];
    const operator = symbols.at(getRandomNumber(0, 3));

    questionToUser(`Question: ${number1} ${operator} ${number2}`);

    let correctAnswer = 0;

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
        default:
            correctAnswer = number1 * number2;
            break;
    }

    const stringSolution = userAnswer();
    const solution = userCorrectAnswer(stringSolution);

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
