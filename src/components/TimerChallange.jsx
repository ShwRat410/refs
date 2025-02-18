import React, { useRef, useState } from 'react'

export default function TimerChallange({title,targetTime}) {

  const timer = useRef()
  const[timerExpired,setTimerExpired]=useState(false)
  const[timerStarted,setTimerStarted]=useState(false)

  function handleTimerStart(){
    timer.current = setTimeout(()=>{
        setTimerExpired(true)
    },targetTime*1000)
    setTimerStarted(true)
  }

  function handleTimerStop(){
    clearTimeout(timer.current)
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired&&<p>You Lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime>1&&'s'}
      </p>
      <p>
        <button onClick={timerStarted ? handleTimerStop : handleTimerStart}>{timerStarted?"Stop":'Start'} Challange</button>
      </p>
      <p className={timerStarted?'active':undefined}>
        {timerStarted?"Timer is running...":"Timer inactive"}
      </p>
    </section>
  )
}
