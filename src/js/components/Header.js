import React from 'react';
import Writer from './Writer';

const Header = () => {
  return (
    <div className="header">
      <h3>
        <em>En Marche !</em>
      </h3>
      <Writer
        strings={[
          'Grand Débat National, impliquez-vous !',
          'Grand Débat National, débattez !',
          'Grand Débat National, contribuez ! ',
          'Grand Débat National, participez !'
        ]}
      />
    </div>
  );
};

export default Header;
