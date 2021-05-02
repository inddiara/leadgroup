import React from 'react';
import './styles.css';

const Header = ({columns = []}) => {
  return (
    <div className="header">
      {columns.map(column => {
        return (
          <div>
            {column.label || ''}
          </div>
        )
      })}
    </div>
  )
};

export default Header;
