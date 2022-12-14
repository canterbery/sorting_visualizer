export const heightFactor = 4;
export const minRange = 1;
export const maxRange = Math.floor(
  document.getElementById("container").clientWidth / 10
);

export const numOfBars = Math.floor(
  document.getElementById("container").clientWidth / 10
);

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
