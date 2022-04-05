import { useState } from 'react';
import './counter.css';

const Counter = ({ min = 0, max = 10, onChange = () => {} }) => {
  const [number, setNumber] = useState(0);

  const setMax = () => () => {
    setNumber(max);
    onChange(max);
  };

  return (
    <div className='counter'>
      <button
        className='btn btn-small btn-min'
        onClick={() => {
          setNumber(min);
          onChange(min);
        }}>
        min
      </button>
      <button
        className='btn btn-big btn-decrease'
        disabled={number === min}
        onClick={() => {
          setNumber(number - 1);
          onChange(number - 1);
        }}>
        &lt;
      </button>
      <div className='counter-value'>{number}</div>
      <button
        className='btn btn-big btn-increase'
        disabled={number === max}
        onClick={() => {
          setNumber(number + 1);
          onChange(number + 1);
        }}>
        &gt;
      </button>
      <button className='btn btn-small btn-max' onClick={setMax()}>
        max
      </button>
    </div>
  );
};

export default Counter;
