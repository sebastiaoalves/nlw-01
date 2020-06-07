

import React, {useState} from 'react';
import './App.css';
import Header from './Header';

function App_copy() {

  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter+1);
  }

  return (
    <div>
      <Header title = {`Contador: ${counter}`} />
      <h1> {counter}.</h1>
      <h1> {counter*2}.</h1>
      <Header title = "Título 2!" />
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
      </div>
  );
}

export default App_copy;
