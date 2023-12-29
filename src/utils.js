const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  return randomNumber !== 0 ? randomNumber : minValue;
};

export default getRandomNumber;
