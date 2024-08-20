import React from 'react';
import './Main.css';
import BodyMain from '../../components/BodyMain/BodyMain';
import LeftSideMain from '../../components/LeftSideMain/LeftSideMain';

function Main() {
  return (
    <div className="App">
      <LeftSideMain />
      <BodyMain />
    </div>
  );
}

export default Main;
