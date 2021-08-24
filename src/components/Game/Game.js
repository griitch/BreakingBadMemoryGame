/* eslint-disable no-unused-vars */
import ScoreBoard from "../ScoreBoard";
import React from "react";
import CardsContainer from "../CardsContainer";
import CenteredDiv from "../shared/CenteredDiv";
import { useEffect, useState } from "react";
import useLevel from "./useLevel";

function Game() {
  const [level, setLevel] = useState(1); // max level = 25
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, loading, shuffleCards] = useLevel(level);
  const [score, setScore] = useState({ current: 0, best: 0 });
  //  use the level to fetch the appropriate number of cards

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      //setGame to lost to display some sort of modal with a replay button
      setScore((prev) => ({
        current: 0,
        best: prev.current > prev.best ? prev.current : prev.best,
      }));
      setClickedCards([]);
      setLevel(1);
    } else if (clickedCards.length === level * 4 -1) {
      setLevel((lvl) => lvl + 1);
      setClickedCards([]);
    } else {
      setScore((prev) => ({
        current: prev.current + 1,
        best: prev.current + 1 > prev.best ? prev.current + 1 : prev.best,
      }));
      setClickedCards((prev) => [...prev, id]);
      shuffleCards();
    }
  };

  return (
    <>
      <ScoreBoard current={score.current} best={score.best} />
      {loading ? (
        <CenteredDiv>
          <h2>Loading level {level} ... </h2>
        </CenteredDiv>
      ) : (
        <CardsContainer handleClick = { handleClick } data={cards} />
      )}
    </>
  );
}

export default Game;
