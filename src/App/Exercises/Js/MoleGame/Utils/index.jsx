export function formatTime(time) {
  const timeInSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

// ================ JavaScript Closure ================
function getRandomGenerator(limit) {
  const recent = Array(limit).fill(-1);
  return (max) => {
    while (true) {
      const random = Math.floor(Math.random() * max);
      if (recent.every((rec) => rec !== random)) {
        recent.push(random);
        recent.shift();
        return random;
      }
    }
  };
}

const getRandomInt = getRandomGenerator(4);

export function getNewMolePosition(currentPosition, tilesNo) {
  while (true) {
    const newPosition = getRandomInt(tilesNo - 1);
    if (currentPosition !== newPosition) {
      return newPosition;
    }
  }
}
