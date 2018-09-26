import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container"> 
      <h1 className="header__title">{props.title}</h1>
      <h2 className="header__subtitle">Put your life in the hands of a computer</h2>
    </div>
  </div>
);

  Header.defaultProps = {
    title: "Test Indecision",
  };

export default Header;