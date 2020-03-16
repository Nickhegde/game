import React, { useState } from 'react';

import { CircleArray } from './components';
import { STRINGS } from './consts';

import logo from './logo.svg';
import './App.scss';

function App() {
  const [score, setScore] = useState(0);
  const [rowNumber, setRowNumber] = useState(0);
  const [colNumber, setColNumber] = useState(0);
  const row = 6, column = 6;


  const onStart = () => {
    setRowNumber(getRandomNumber(row));
    setColNumber(getRandomNumber(column));
  }

  const onStop = () => {
    setRowNumber(0);
    setColNumber(0);
    window.alert(`${STRINGS.RESULT} ${score}`);
    setScore(0);
  }

  const getRandomNumber = (number) => {
    const min = 1,
      max = number;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const checkAnswer = (rNumber, cNumber) => {
    if ((rNumber === rowNumber) && (cNumber === colNumber)) {
      setScore(score + 1);
      onStart();
    } else {
      score > 0 ? setScore(score - 1) : setScore(0);
    }
  }

  return (
    <div className="app">
      <div className='app-container'>
        <div className='header'>
          <img src={logo} className="app-logo" alt="logo" />
          <span className='title'>{STRINGS.HEADING}</span>
        </div>
        <div className='intro'>{STRINGS.INTRO}</div>
        <div className='score-card'>
          <span className='score-heading'>{STRINGS.SCORE}</span>
          <div className='score-box'>{score}</div>
        </div>
        <div className='game-array'>
          <CircleArray row={row} column={column} colorRow={rowNumber} colorCol={colNumber} checkAnswer={checkAnswer}></CircleArray>
        </div>
        <div className='control-keys'>
          <button className={`play-btn ${rowNumber ? 'disabled' : ''}`} onClick={rowNumber ? () => { } : onStart} >{STRINGS.PLAY}</button>
          <button className={`stop-btn ${rowNumber ? '' : 'disabled'}`} onClick={rowNumber ? onStop : () => { }}>{STRINGS.STOP}</button>
        </div>
        <div className='instructions'>
          <div>{STRINGS.INSTRUCTIONS}</div>
          <div>{STRINGS.INSTRUCTION_ONE}</div>
          <div>{STRINGS.INSTRUCTION_TWO}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
