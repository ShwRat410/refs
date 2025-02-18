import React from 'react'

export default function TimerChallange({title,targetTime}) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime>1&&'s'}
      </p>
      <p>
        <button>Stop challange/start</button>
      </p>
      <p className=''>
        Timer is running/inactive
      </p>
    </section>
  )
}
