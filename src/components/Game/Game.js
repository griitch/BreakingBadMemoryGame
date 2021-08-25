/* eslint-disable no-unused-vars */
import ScoreBoard from "../ScoreBoard";
import React from "react";
import CardsContainer from "../CardsContainer";
import DialogModal from "../shared/DialogModal";
import { useState } from "react";
import useLevel from "./useLevel";
import Loading from "../Loading/Loading";

function Game() {
  const [level, setLevel] = useState(1); // max level = 25
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, loading, shuffleCards] = useLevel(level);
  const [score, setScore] = useState({ current: 0, best: 0 });
  const [winScreen, setWinScreen] = useState(false);
  const [lossScreen, setLossScreen] = useState(false);

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      setLossScreen(true);
    } else {
      setScore((prev) => ({
        current: prev.current + 1,
        best: prev.current + 1 > prev.best ? prev.current + 1 : prev.best,
      }));
      if (clickedCards.length === level * 4 - 1) {
        setWinScreen(true);
      } else {
        setClickedCards((prev) => [...prev, id]);
        shuffleCards();
      }
    }
  };

  return (
    <>
      {lossScreen && (
        <DialogModal>
          You Lost ...
          <button
            onClick={() => {
              setLossScreen(false);
              setScore((prev) => ({
                current: 0,
                best: prev.current > prev.best ? prev.current : prev.best,
              }));
              setClickedCards([]);
              setLevel(1);
            }}
          >
            Replay
          </button>
        </DialogModal>
      )}

      {winScreen && (
        <DialogModal>
          Congratulations ! You passed level {level}
          <button
            onClick={() => {
              setWinScreen(false);
              setLevel((lvl) => lvl + 1);
              setClickedCards([]);
            }}
          >
            Pass to the next level
          </button>
        </DialogModal>
      )}

      <ScoreBoard current={score.current} best={score.best} />
      {loading ? (
        <Loading>
          Loading level {level} ...
          <img src="src\assets\logo.png" alt="logo" />
        </Loading>
      ) : (
        <CardsContainer handleClick={handleClick} data={cards} />
      )}
    </>
  );
}

export default Game;
