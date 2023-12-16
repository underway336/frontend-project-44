import { cons, car, cdr } from '@hexlet/pairs';
import {
    greeting,
    rulesOfTheGame,
    questionToUser,
    getProgression,
    getRandomNumber,
    userAnswer,
    answerIsCorrect,
    congratulations,
    wrongAnswer,
    wrongAnswerTryAgain,
    userCorrectAnswer,
} from '../index.js';

greeting();

rulesOfTheGame('What number is missing in the progression?');

for (let i = 0; i < 3; i += 1) {
    const startProgression = getRandomNumber(0, 50);
    const progressionStep = getRandomNumber(0, 10);
    const randomLengths = [5, 6, 7, 8, 9, 10];
    const progressionLength = randomLengths.at(getRandomNumber(0, 5));
    const randomIndex = getRandomNumber(0, progressionLength);

    const progression = getProgression(
        startProgression,
        progressionStep,
        progressionLength
    );

    const missingNumber = progression.at(randomIndex);
    const pair = cons(missingNumber, '..');
    const resProgression = [];

    for (let n = 0; n < progressionLength; n += 1) {
        if (
            progressionStep === 0 &&
            n === randomIndex &&
            progression[n] === missingNumber
        ) {
            resProgression.push(cdr(pair));
            n += 1;
        }
        if (progression[n] === missingNumber && progressionStep !== 0) {
            resProgression.push(cdr(pair));
        } else {
            resProgression.push(progression[n]);
        }
    }

    const progressionToString = resProgression.join(' ');

    questionToUser(`Question: ${progressionToString}`);

    const stringSolution = userAnswer();
    const solution = userCorrectAnswer(stringSolution);

    const correctAnswer = car(pair);

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
