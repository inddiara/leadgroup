import React from 'react';

const ButtonComponent = (props) => {
  return (
    <button className="Button" type="submit">{props.title}</button>
  );
};

export default ButtonComponent;