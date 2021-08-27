import React from "react";
import Header from "./Header/Header";
import "../styles/global.css";
import { BrowserRouter } from 'react-router-dom';
import { Routes } from "./Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Header>Breaking Bad card memory game</Header>
      <Routes />
    </BrowserRouter>
  );
}






