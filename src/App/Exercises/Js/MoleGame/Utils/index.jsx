export function formatTime(time) {
    const timeInSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getNewMolePosition(currentPosition, tilesNo) {
    while (true) {
        const newPosition = getRandomInt(tilesNo - 1);
        if (currentPosition != newPosition) {
            return newPosition;
        }
    }
}