export const isOdd = (num) => num % 2 !== 0;

export const ucfirst = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
