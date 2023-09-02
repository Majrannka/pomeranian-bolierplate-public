/* eslint-disable prettier/prettier */
import './styles.css';
import { Label, Button, Output, Result } from './Components/index';
import { useState } from 'react';
import { formatTime } from './Utils';
import { GameBoard } from './GameBoard/GameBoard';
import { MoleTimer } from './Features/MoleTimer';

const MINUTE = 60000; //milisekundy

const DURATION = [
  { label: '1 minuta', duration: MINUTE + 100 },
  { label: '2 minuty', duration: 2 * MINUTE + 100 },
  { label: '3 minuty', duration: 3 * MINUTE + 100 },
];
const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 2000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 1500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 1000 },
];

export const MoleGame = () => {
  const [tiles, setTiles] = useState();
  const [duration, setDuration] = useState();
  const [gameDuration, setGameDuration] = useState();
  const [molesOption, setMolesOption] = useState();
  const [status, setStatus] = useState('notStarted');
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);

  function setInitialTiles(molesOption) {
    return Array(molesOption.tiles)
      .fill(0)
      .map((tile, index) => ({ index }));
  }

  function handleStart() {
    if (duration && molesOption) {
      setShowWarning(false);
      setScore(0);
      setStatus('started');
      setTiles(setInitialTiles(molesOption));
      setGameDuration(duration);
    } else {
      setShowWarning(true);
    }
  }

  function handleStop() {
    setStatus('notStarted');
    setDuration(undefined);
    setMolesOption(undefined);
  }

  function handleFinished() {
    setStatus('finished');
    setDuration(undefined);
    setMolesOption(undefined);
  }

  return (
    <>
      <h4>&lt;KRET</h4>
      <div className="communicates">
        <p>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.{' '}
        </p>
        {showWarning && <p className="settingWarning">Brakuje ustawień gry!</p>}
        {status === 'finished' && (
          <Result score={score} duration={formatTime(gameDuration)} />
        )}
      </div>

      {status !== 'started' && (
        <div>
          <div className="setting">
            <Label>Czas gry</Label>
            <div className="buttons">
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
            <Label>Liczba kretów</Label>
            <div className="buttons">
              {MOLES.map((item) => (
                <Button
                  key={item.label}
                  value={item.label}
                  onClick={() => setMolesOption(item)}
                  variant={
                    !molesOption || item.molesNo !== molesOption.molesNo
                      ? 'primary'
                      : 'secondary'
                  }
                />
              ))}
            </div>
          </div>
          <div className="setting">
            <Label>Przyciski sterujące</Label>
            <div className="buttons">
              <Button
                value={'Start'}
                variant={'tertiary'}
                onClick={handleStart}
              />
            </div>
          </div>
        </div>
      )}
      {status === 'started' && (
        <div>
          <div className="setting">
            <Label>Czas do końca</Label>
            <div className="buttons">
              <Output>
                <MoleTimer
                  duration={duration}
                  handleFinished={handleFinished}
                />
              </Output>
            </div>
          </div>
          <div className="setting">
            <Label>Wynik</Label>
            <div className="buttons">
              <Output>{score}</Output>
            </div>
          </div>
          <div className="setting">
            <Label>Przyciski sterujące</Label>
            <div className="buttons">
              <Button
                value={'Stop'}
                variant={'tertiary'}
                onClick={handleStop}
              />
            </div>
          </div>
        </div>
      )}
      {status === 'started' && (
        <GameBoard
          tiles={tiles}
          setScore={setScore}
          molesOption={molesOption}
        />
      )}
    </>
  );
};
