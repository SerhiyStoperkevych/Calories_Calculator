import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState({
    yesterday: '',
    today: '',
    tomorrow: ''
  });

  const [total, setTotal] = useState(0);

  const [sub, setSub] = useState(false);

  const handleInput = (e) => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const yesterday = parseFloat(input.yesterday);
    const today = parseFloat(input.today);
    const tomorrow = parseFloat(input.tomorrow)
    const sum = yesterday + today + tomorrow;
    if(isNaN(yesterday) || isNaN(today) || isNaN(tomorrow)) {
      return (
        <>
          <h1>Please write your calories</h1>
          <button onClick={handleReset}>Reset</button>
        </>
      )
    }
    setTotal(sum);
    setSub(true);
  };

  const handleReturn = () => {
    setSub(false);
    useState({
      yesterday: '',
      today: '',
      tomorrow: ''
    });
  };

  return (
    <>
      { sub ? (
        <form>
          <h1>Success</h1>
          <p>Your consumed calories are: {total}</p>
          <button onClick={handleReturn} className="return">Reset</button>
        </form>
      ) : (
        <>
          <h1>Please state your calories:</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <h2>Consumed yesterday:</h2>
              <input 
              type="number"
              name="yesterday"
              onChange={handleInput}
              value={input.yesterday}
              />
            </div>

            <div>
              <h2>Consumed today:</h2>
              <input 
              type="number"
              name="today"
              onChange={handleInput}
              value={input.today}
              />
            </div>

            <div>
              <h2>Will be consumed:</h2>
              <input 
              type="number"
              name="tomorrow"
              onChange={handleInput}
              value={input.tomorrow}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </>
  )
};

export default App;
