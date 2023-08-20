/* eslint-disable prettier/prettier */
import './styles.css';
import { Label, Button, Output, Result, Tile } from './Components/index';
import { useState, useEffect } from 'react'
import { formatTime, getNewMolePosition } from './Utils';

const MINUTE = 6000; //milisekundy
const HIGHLIGHT_TIME = 500;

const DURATION = [
  { label: '1 minuta', duration: MINUTE + 100 },
  { label: '2 minuty', duration: 2 * MINUTE + 100 },
  { label: '3 minuty', duration: 3 * MINUTE + 100 },
];
const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 1000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 350 },
];

export const MoleGame = () => {
  const [duration, setDuration] = useState();
  const [previousDuration, setPreviousDuration] = useState();
  const [molesOption, setMolesOption] = useState();
  const [tiles, setTiles] = useState([]);
  const [status, setStatus] = useState('non-started');
  const [timeLeft, setTimeLeft] = useState();
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [remainingTime, setRemainingTime] = useState();
  const [molePosition, setMolePosition] = useState();
  const [correct, setCorrect] = useState();
  const [incorrect, setIncorrect] = useState();

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(remainingTime)
      setStatus('finished')
      setPreviousDuration(duration);
      setDuration(undefined);
      setMolesOption(undefined);
    }
  }, [remainingTime, timeLeft])

  useEffect(() => {
    let timeoutId;
    if (correct != undefined || incorrect != undefined) {
      timeoutId = setTimeout(() => setCorrect(undefined), HIGHLIGHT_TIME);
      timeoutId = setTimeout(() => setIncorrect(undefined), HIGHLIGHT_TIME)
    }
    return () => clearTimeout(timeoutId);
  }, [correct, incorrect]);

  function startCountDown() {
    const remianing = setInterval(() => setTimeLeft((previous) => previous - 1000), 1000)
    setRemainingTime(remianing);
  }

  function setInitialTiles(molesOption) {
    return Array(molesOption.tiles).fill(0).map((tile, index) => ({ index }))
  }

  function handleStart() {
    if (duration && molesOption) {
      setShowWarning(false);
      setScore(0);
      setMolePosition(getNewMolePosition(molePosition, molesOption.tiles));
      setStatus('started');
      setTiles(setInitialTiles(molesOption));
      setTimeLeft(duration)
      startCountDown();

    } else {
      setShowWarning(true)
    }
  }

  function handleGuess(index) {
    if (molePosition === index) {
      setCorrect(index)
      setScore((previousScore) => previousScore + 1)
      setMolePosition(getNewMolePosition(index, molesOption.tiles))
    } else {
      setIncorrect(index)
      setScore((previousScore) => previousScore - 1)
    }
  }

  function getTileVariant(index) {
    if (index === correct) return 'correct';
    if (index === incorrect) return 'not-correct';
    return 'neutral'
  }


  return (
    <>
      <h4>&lt;KRET</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.{' '}
      </p>
      {showWarning && <p className='settingWarning'>
        Brakuje ustawień gry!
      </p>
      }
      {status === 'finished' && <Result score={score} duration={formatTime(previousDuration)} />}
      <p>
        <b>duration:</b> {duration}<br />
        <b>molesNo:</b> {molesOption && molesOption.molesNo}<br />
        <b>status:</b> {status}<br />
        <b>timeLeft:</b> {timeLeft}<br />
        <b>board:</b> {JSON.stringify(tiles)}
      </p>
      {status !== 'started' &&
        <div>
          <div className="setting">
            <Label value={'Czas gry'} />
            <div className='buttons'>
              {DURATION.map((item) => (
                <Button
                  key={item.label}
                  value={item.label}
                  onClick={() => setDuration(item.duration)}
                  variant={item.duration !== duration ? 'primary' : 'secondary'}
                />
              ))}
            </div>
          </div>
          <div className="setting">
            <Label value={'Liczba kretów'} />
            <div className='buttons'>
              {MOLES.map((item) => (
                <Button
                  key={item.label}
                  value={item.label}
                  onClick={() => setMolesOption(item)}
                  variant={(!molesOption || item.molesNo !== molesOption.molesNo) ? 'primary' : 'secondary'}
                />
              ))}
            </div>

          </div>
          <div className="setting">
            <Label value={'Przyciski sterujące'} />
            <div className='buttons'>
              <Button value={'Start'} variant={'tertiary'} onClick={handleStart} />
            </div>
          </div >
        </div>
      }
      {status === 'started' &&
        <div>
          <div className="setting">
            <Label value={'Czas do końca'} />
            <div className='buttons'>
              <Output value={formatTime(timeLeft)} />
            </div>
          </div>
          <div className="setting">
            <Label value={'Wynik'} />
            <div className='buttons'>
              <Output value={score} />
            </div>
          </div >
          <div className="setting">
            <Label value={'Przyciski sterujące'} />
            <div className='buttons'>
              <Button value={'Stop'} variant={'tertiary'} onClick={() => setStatus('non-started')} />
            </div>
          </div>
        </div>
      }
      {status === 'started' &&
        <div className='board'>
          {tiles.map(({ index }) => <Tile key={index} hasMole={index === molePosition} variant={getTileVariant(index)} onClick={() => handleGuess(index)} />)}
          {/* <br />
          <Tile variant={'neutral'} />
          <Tile variant={'correct'} />
          <Tile variant={'not-correct'} />
          <Tile hasMole variant={'neutral'} /> */}
        </div>}
    </>
  );
};
