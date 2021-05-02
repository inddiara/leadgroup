import React, { useState, useRef } from 'react';
import './styles.css';

const Card = ({ item, handleChangePosition}) => {
  const initialPosition = useRef();
  const [fx, setFx] = useState(0);
  const left = (item?.position || 0 ) * 200 + fx;

  const handleDrag = (e) => {
    const screenX = e.screenX;
    if (initialPosition.current === undefined) {
      initialPosition.current = screenX;
    } else {
      setFx(screenX - initialPosition.current);
    }
  };

  const onDragEnd = (e) => {
    const localFx = e.screenX - initialPosition.current;
    if(localFx > 100 && localFx < 250 && item.position < 2 ) {
      handleChangePosition(1);
    }
    setFx(0);
  };

  return (
    <div className="card" style={{ left: left }} draggable={true} onDrag={handleDrag} onDragEnd={onDragEnd} >
      <h3>{item.title}</h3>
    </div>
  )
};

export default Card;