import React from 'react';
import Header from '../Header';
import Row from '../Row'; 
import './styles.css';

const Table = ({data = [], columns = [], changePosition}) => {
  return (
    <div className="layout">
      <Header columns={columns}/>
      {data.map(item => {
        return (
          <Row columns={columns} item={item} changePosition={changePosition}/>
        )
      })}
    </div>
  )
};

export default Table;