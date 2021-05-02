import React from 'react';
import Card from '../Card';
import './styles.css';

const Row = ({ item, columns, changePosition }) => {
  const handleChangePosition = (value) => {
    changePosition(item.id, value);
  }

  return (
    <div className="Row">
      {columns.map(column => {
        return (
          <div>

          </div>
        )
      })}
      <Card item={item} handleChangePosition={handleChangePosition}/>
    </div>
  );
};

export default Row;