import React from 'react';
import Navbar from '../components/Navbar';
import numers from '../numers';
import Numer from './Numer';

function App() {
  return (
    <div className="container">
      <Navbar links={numers.map(numer => numer.title)} />
      {numers.map(numer => {
        return (
          <Numer numer={numer} />
        )
      })
      }
    </div>
  );
}

export default App;
