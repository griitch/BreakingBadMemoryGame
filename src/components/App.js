import React from "react";
// import capitalize from 'lodash/capitalize';
// import { useState, useEffect } from 'react';
import Header from "./Header/Header";
import "../styles/global.css";
import Game from "./game/Game";

// https://breakingbadapi.com/api/characters?limit= { 4 + (level -1 )*2 }

export default function App() {
  return (
    <>
      <Header>Breaking Bad card memory game</Header>
      <Game />
    </>
  );
}






