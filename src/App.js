import "./App.css";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import Main from "./components/Main";
import Step from "./components/Step";
import { useState, useRef, useEffect } from "react";
import backgroundMusic from "./assets/audios/wonderful-music.mp3";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const audioRef = useRef(new Audio(backgroundMusic));
  const [step, setStep] = useState(1);
  const [showStep, setShowStep] = useState(false);

  useEffect(() => {
    audioRef.current.loop = true;
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.pause();
    }
  }, [musicPlaying]);

  useEffect(() => {
    if(quizStarted){
      setShowStep(true);
      setTimeout(() => {
        setShowStep(false);
      }, 1500)
    }
  },[quizStarted]);

  return (
    <div className="App">
      <Header musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying} />
      {!quizStarted && (
        <div>
          <h1>WHAT DOG BREED ARE YOU?</h1>
          <p>
            Take this quiz to find out which dog breed you are based on your
            personality
          </p>
        </div>
      )}
      {!quizStarted && <img className="dog-image-1"  src="../assets/cocker-spaniel.png" alt="cocker-spaniel" />}
      <Main quizStarted={quizStarted} setQuizStarted={setQuizStarted} />
      {showStep && <Step step={step} totalSteps={10} />}
      {quizStarted && !showStep ? <Quiz /> : null}
      {!quizStarted && <img className="dog-image-2" src="../assets/poodle.png" alt="poodle" />}
    </div>
  );
}

export default App;
