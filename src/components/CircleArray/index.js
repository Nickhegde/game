import React from 'react';

import './CircleArray.scss'

const renderArray = (row, column, colorRow, colorCol, checkAnswer) => {
  const cArray = [];
  for (let r = 1; r <= row; r++) {
    const columnArray = renderColumn(column, r, colorRow, colorCol, checkAnswer);
    cArray.push(
      <div id={`row-${r}`} className='rows' key={r}>
        {columnArray.map((column, index) => {
          return column;
        })}
      </div>
    )
  }
  return cArray;
}

const renderColumn = (column, r, colorRow, colorCol, checkAnswer) => {
  const columnArray = [];
  for (let c = 1; c <= column; c++) {
    const setColor = (r === colorRow) && (c === colorCol);
    columnArray.push(
      <svg className='columns' key={c}> <circle id={`column-${c}`} className='circle' cx={20} cy={20} r={10} stroke='white' fill={setColor ? "#61dafb" : "transparent"} onClick={() => { checkAnswer(r, c) }} /></svg>
    )
  }
  return columnArray;
}

export default function CircleArray({ row, column, colorRow, colorCol, checkAnswer }) {
  const cArray = row || column ? renderArray(row, column, colorRow, colorCol, checkAnswer) : [];
  return (
    <div className='circle-array-container'>
      {cArray.length ? (cArray.map((array, index) => {
        return array;
      })) : null}
    </div>
  );
}
