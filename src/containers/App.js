import React from 'react';
import Navbar from '../components/Navbar';
import numers from '../numers';
import Numer from './Numer';

function App() {
  return (
    <div className="container">
      <Navbar links={numers.map(numer => numer.id)} />
      <div className="banner vh-100 flex justify-center items-center">
        <h1 className="white">NUMERY</h1>
      </div>
      {numers.map(numer => {
        return (
          <Numer numer={numer} key={numer.id} />
        )
      })
      }
    </div>
  );
}

export default App;
