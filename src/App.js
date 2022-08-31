import React, { ReactDOM } from 'react';
import './App.css';
import Cells from './Cells/Cells';
import ClearButton from './Buttons/ClearButton';
import SubmitButton from './Buttons/SubmitButton'

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
        <form id='sudoku-container' className='sudoku-container'>
            <Cells />
        </form>
      </body>
    </div>
  );
}

export default App;
