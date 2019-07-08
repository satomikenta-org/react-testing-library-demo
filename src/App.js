import React from 'react';
import useCounter from './customHooks/useCounter';
import HomePage from './HomePage';

function App() {

  const [ count, increment ] = useCounter();
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={ () => increment() }>Click to Increment!!</button>
      <HomePage/>
    </div>
  );
}

export default App;
