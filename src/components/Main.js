import { ReactComponent as Start } from "../assets/paw-start.svg";
import { ReactComponent as Step } from "./Step";
import Quiz from "./Quiz";

export default function Main({quizStarted, setQuizStarted}) {

  const handleStart = () => {
    setQuizStarted(true);
  };

  return (
    <>
        {!quizStarted && 
          <div className="paw-wrap">
            <Start onClick={() => handleStart()} />
            <span className="start-label">Click to Start</span>
          </div>
        }
    </>
  );
}
