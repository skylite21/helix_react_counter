import React, { useState } from 'react';
import { render } from 'react-dom';
// import Counter from './Counter';
import CounterClass from './CounterClass';
import './style.css';

const App = () => {
  const [count, setCount] = useState(null);

  return (
    <>
      <h1>{count}</h1>
      <CounterClass min={0} onChange={setCount} />
    </>
  );
};

render(<App />, document.getElementById('root'));
