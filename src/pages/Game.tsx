import React, { useState } from "react";
import "./Game.css";
import { thisOrThat } from "../data/thisOrThat";

function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [dropped, setDropped] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const currentQuestion = thisOrThat[currentIndex];

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    option: string
  ) => {
    event.dataTransfer.setData("text/plain", option);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selected = event.dataTransfer.getData("text");

    const isCorrect = selected === currentQuestion.correct;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setFeedback(`You chose: ${selected} ${isCorrect ? "✅" : "❌"}`);
    setDropped(true);

    setTimeout(() => {
      setFeedback("");
      setDropped(false);
      if (currentIndex + 1 < thisOrThat.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setGameOver(true);
      }
    }, 1500);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setFeedback("");
    setDropped(false);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h2 className="game-title">This or That Game 🎮</h2>
      {!gameOver ? (
        <div className="question-block">
          <p className="question">{currentQuestion.question}</p>
          <div className="options">
            {currentQuestion.options.map((option) => (
              <div
                key={option}
                className="draggable-option"
                draggable={!dropped}
                onDragStart={(e) => handleDragStart(e, option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {dropped ? <p>{feedback}</p> : <p>Drop what you would choose here to see if you match my choice.</p>}
          </div>
        </div>
      ) : (
        <div className="game-result">
          <h3>Game Over!</h3>
          <p>
            You matched <strong>{score}</strong> out of{" "}
            <strong>{thisOrThat.length}</strong> with Shanyce 🎉
          </p>
          <button className="restart-button" onClick={restartGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
