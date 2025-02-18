import { useRef, useState } from "react";

export default function Player() {
  const refPlayerName=useRef();
  const[playerName,setPlayerName]=useState(null)

  function handleClick(){
    setPlayerName(refPlayerName.current.value)
    refPlayerName.current.value=''
  }

  return (
    <section id="player">
      <h2>Welcome {playerName??''}</h2>
      <p>
        <input ref={refPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
