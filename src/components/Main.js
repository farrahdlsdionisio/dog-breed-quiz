import { ReactComponent as Start } from "../assets/paw-start.svg";
import { useState, useRef } from "react";

export default function Main() {
  const username = useRef(null);
  const [enteredUsername, setUsername] = useState(null);

  const handleStart = () => {
    console.log("start");
  };

  const handleClick = (e) => {
    setUsername(username.current.value);
  };

  return (
    <>
      <h1>WHAT DOG BREED ARE YOU? {enteredUsername ?? ""} </h1>
      <div>
        <p>
          Take this quiz to find out which dog breed you are based on your
          personality
        </p>
        <input type="text" ref={username} />
        <button onClick={handleClick}>Set Name</button>
      </div>
      <img src="../assets/cocker-spaniel.png" alt="cocker-spaniel" />
      <Start onClick={() => handleStart()} />
      <img src="../assets/poodle.png" alt="poodle" />
    </>
  );
}
