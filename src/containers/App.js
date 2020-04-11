import React from 'react';
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar links={["nfacts", "logarithm", "pfactor", "calculus"]} />
      <div id="number-facts">
        <h1>Number Facts</h1>
      </div>
      <div id="logarithm">
        <h1>Logarithm</h1>
      </div>
      <div id="prime-factor">
        <h1>Prime Factor</h1>
      </div>
      <div id="simple-calculus">
        <h1>Simple Calculus</h1>
      </div>
    </div>
  );
}

export default App;
