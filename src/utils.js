export const checkNaN = (userAnswer) => {
  let solution = Number(userAnswer);

  if (Number.isNaN(solution) === true) {
    solution = userAnswer;
  }
  return solution;
};

const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomNumber;
};

export default getRandomNumber;
