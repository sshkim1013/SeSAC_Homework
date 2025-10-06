import { useState, useEffect } from "react";

import RandomNumber from "./RandomNumber";
import Form from "./Form";

export default function Container() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [hintMessage, setHintMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    let newRandom = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandom);
  }, []);

  function compareNumbers(number) {
    if (randomNumber > number) {
      setHintMessage("Up!");
      setIsCorrect(false);
    } else if (randomNumber < number) {
      setHintMessage("Down!");
      setIsCorrect(false);
    } else {
      setHintMessage("정답!");
      setIsCorrect(true);
    }

    let newAttempts = attempts + 1;
    setAttempts(newAttempts);
  }

  return (
    <div>
      <Form compareNumbers={compareNumbers} isCorrect={isCorrect}></Form>
      <RandomNumber
        randomNumber={randomNumber}
        isCorrect={isCorrect}
      ></RandomNumber>
      <p>{hintMessage}</p>
      <p>시도 횟수: {attempts}</p>
    </div>
  );
}
