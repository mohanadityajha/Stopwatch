import React, { useState, useEffect } from 'react'

export default function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [showTime, setShowTime] = useState(0);

  useEffect(() => {
    const currentDisplayTime = getTime();
    setShowTime(currentDisplayTime);
  }, [timer])

  const getTime = () => {
    const sec = Number(timer);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor(timer % 3600 / 60);
    let seconds = Math.floor(timer % 3600 % 3600);

    if (hours < 10) { hours = "0" + hours }
    if (minutes < 10) { minutes = "0" + minutes }
    if (seconds < 10) { seconds = "0" + seconds }
    return `${hours}:${minutes}:${seconds}`
  }

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000);
    setTimerId(timer)
    setIsStarted(true)
  }

  const stopTimer = () => {
    clearInterval(timerId);
    setTimer(0);
    setIsStarted(false)
  }

  const pauseTimer = () => {
    clearInterval(timerId);
    setIsPaused(true)
  }

  const resumeTimer = () => {
    startTimer();
    setIsPaused(false)
  }

  const handleStart = () => {
    if (isStarted) {
      stopTimer()
    } else {
      startTimer();
    }
  }

  const handlePause = () => {
    if (isPaused) {
      resumeTimer();
    } else {
      pauseTimer()
    }
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <div>{showTime}</div>
      <button onClick={handleStart}>{isStarted ? "Stop" : "Start"}</button>
      <button disabled={!isStarted} onClick={handlePause}>{isPaused ? "Resume" : "Pause"}</button>
    </>
  )
}
