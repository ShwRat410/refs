import { useState } from "react";

export default function Player() {

  const[playerName,setPlayerName]=useState('')
  const[submitted,setSubmitted]=useState(false)

  function handleClick(){
    setSubmitted(true)
  }

  function handleChange(event){
    setSubmitted(false)
    setPlayerName(event.target.value)
  }

  return (
    <section id="player">
      <h2>Welcome {submitted?playerName:''}</h2>
      <p>
        <input onChange={handleChange} value={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
