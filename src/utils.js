export const checkNaN = (userAnswer) => {
  let solution = Number(userAnswer);

  if (Number.isNaN(solution) === true) {
    solution = userAnswer;
  }
  return solution;
};

const getRandomNumber = (minValue, maxValue) => {
  let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  while (randomNumber === 0) {
    randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
  return randomNumber;
};

export default getRandomNumber;
