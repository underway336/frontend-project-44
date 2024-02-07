export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIndex = (collection) => getRandomNumber(0, collection.length - 1);
