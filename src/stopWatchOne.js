import React, { useState, useEffect } from 'react'

const StopWatchOne = () => {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  //setTime(time + 10)

  useEffect(() => {
    let interVal = null;
    if (start) {
      interVal = setInterval(() => setTime(previousTime => previousTime + 1), 1)
    } else {
      clearInterval(interVal);
    }
    return () => clearInterval(interVal)
  }, [start])

  return (
    <div className='App'>
      <h1>Stopwatch</h1>
      <h1>
        <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)} min:</span>
        <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)} sec:</span>
        <span> {("0" + time % 1000).slice(-3)} ms</span>
      </h1>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => { setTime(0); setStart(false); }}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatchOne