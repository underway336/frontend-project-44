export const checkNaN = (userAnswer) => {
  let solution = Number(userAnswer);

  if (Number.isNaN(solution) === true) {
    solution = userAnswer;
  }
  return solution;
};

const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  return randomNumber !== 0 ? randomNumber : minValue;
};

export default getRandomNumber;
