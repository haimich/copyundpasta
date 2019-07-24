// answer randomly with yes or no

const MAX = 10;

if (getRandomInt() >= 7) {
  process.exit(0); // YES
} else {
  process.exit(1); // NO
}

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(MAX));
}