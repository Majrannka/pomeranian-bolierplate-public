import { useEffect, useState } from 'react';
import { Tile } from '../Features/Tile/tile';
import { useMolePositions } from './useMolePositions';

const HIGHLIGHT_TIME = 500;

export function GameBoard({ tiles, setScore, molesOption }) {
  const [correct, setCorrect] = useState();
  const [incorrect, setIncorrect] = useState();
  const [molePositions, moveRandomly] = useMolePositions(molesOption);

  useEffect(() => {
    let timeoutId;
    if (correct !== undefined || incorrect !== undefined) {
      timeoutId = setTimeout(() => setCorrect(undefined), HIGHLIGHT_TIME);
      timeoutId = setTimeout(() => setIncorrect(undefined), HIGHLIGHT_TIME);
    }
    return () => clearTimeout(timeoutId);
  }, [correct, incorrect]);

  function getTileVariant(index) {
    if (index === correct) return 'correct';
    if (index === incorrect) return 'incorrect';
    return 'neutral';
  }

  function handleGuess(index) {
    if (molePositions && molePositions.some((position) => position === index)) {
      setCorrect(index);
      setScore((previousScore) => previousScore + 1);
      moveRandomly(index);
    } else {
      setIncorrect(index);
      setScore((previousScore) => previousScore - 1);
    }
  }

  return (
    <div className="board">
      {tiles.map(({ index }) => (
        <Tile
          key={index}
          hasMole={
            molePositions &&
            molePositions.some((position) => position === index)
          }
          variant={getTileVariant(index)}
          onClick={() => handleGuess(index)}
        />
      ))}
    </div>
  );
}
