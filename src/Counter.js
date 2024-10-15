import React from 'react';
import useStore from './store';

const Counter = () => {
  const { count, increaseCount, decreaseCount } = useStore();
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default Counter;
