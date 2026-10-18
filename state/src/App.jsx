import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  let [initial_count, setCounter] = useState(0)

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    if (color != backgroundColor)
    {
      initial_count ++;
      setCounter(initial_count)
    }
    
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      
      <h1> {initial_count} </h1>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
