import React from 'react';
import './App.css';
import Cells from './Cells/Cells'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Solve your sudoku!
        </h1>
        <img className='brightness'/>
      </header>
      <body>
        <div className='sudoku-container'>
          <div className='sudoku-grid'>
            <Cells />
          </div>
          <div className='button-container'>
            <button className='clear-button'>Clear</button>
            <button>Submit</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
