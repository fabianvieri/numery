import React from 'react';
import Navbar from '../components/Navbar';
import numers from '../numers';
import Numer from './Numer';

function App() {
  return (
    <div className="container">
      <Navbar links={numers.map(numer => numer.id)} />
      <div className="banner vh-100 flex flex-column justify-center items-center">
        <h1 className="white">NUMERY</h1>
        <h2 className="white-60">
          this is simple react project for fun,
          build using some APIs about number and mathematical
        </h2>
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
