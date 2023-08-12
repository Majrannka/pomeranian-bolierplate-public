/* eslint-disable prettier/prettier */
import './styles.css';
import { Label, Button, Output, Result, Tile } from './Components/index';
import { useState, useEffect } from 'react'


const MINUTE = 60000; //milisekundy
const DURATION = [
  { label: '1 minuta', duration: MINUTE },
  { label: '2 minuty', duration: 2 * MINUTE },
  { label: '3 minuty', duration: 3 * MINUTE },
];
const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 1000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 350 },
];

export const MoleGame = () => {
  const [duration, setDuration] = useState();
  const [molesNo, setMolesNo] = useState();
  const [tiles, setTiles] = useState([]);
  const [timeVisible, setTimeVisible] = useState();
  const [status, setStatus] = useState('non-started');
  const [timeLeft, setTimeLeft] = useState();
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    console.log("Status się zmienił ", status)
    if (status === 'non-started') {
      setTimeLeft(0);
    }
    if (status === 'started') {
      setTimeLeft(duration)
      setTiles(getInitialTiles());
    }
    if (status !== 'finished') {
      setScore(0)
    }
  }, [status, duration])

  function setInitialTiles(molesNo) {
    matrix = []
    for (let i = 0; i < molesNo + 2; i++) {
      row = []
      for (let i = 0; i < 5; i++) {
        row.push(<Tile variant={'neutral'} />)
      }
      matrix.push(row)
    }
    setTiles(matrix)
  }

  function formatTime(time) {
    const timeInSeconds = time / 1000;
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`
  }

  function handleStart() {
    if (duration > 0 && molesNo > 0) {
      setShowWarning(false);
      setStatus('started');
    } else {
      setShowWarning(true)
    }
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
      {status === 'finished' && <Result score={score} duration={formatTime(duration)} />}
      <p>
        <b>duration:</b> {duration}<br />
        <b>molesNo:</b> {molesNo}<br />
        <b>status:</b> {status}<br />
        <b>timeLeft:</b> {timeLeft}
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
                  onClick={() => setMolesNo(item.molesNo)}
                  variant={item.molesNo !== molesNo ? 'primary' : 'secondary'}
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
      <div className='board'>
        <Tile variant={'neutral'} />
        <Tile variant={'correct'} />
        <Tile variant={'not-correct'} />
        <Tile hasMole variant={'neutral'} />
      </div>
    </>
  );
};
