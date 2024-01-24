const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomNumber;
};

export default getRandomNumber;
