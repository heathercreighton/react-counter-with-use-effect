import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('white');
  
  useEffect(() => {
    count % 5 === 0 ? setColor('red') : setColor('blue');
  }, [count]);
  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => (count <= 0 ? 0 : setCount(count - 1));
  return (
    <div style={{ background: color }}>
      <Counter
        count={count}
        add={() => handleAdd()}
        subtract={() => handleSubtract()}
      />
    </div>
  );
}
