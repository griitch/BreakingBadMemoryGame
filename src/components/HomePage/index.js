import React from "react";
import Container from "./Container";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container>

        <h2>Rules </h2>
    
      <p>
        You are presented with multiple images of Breaking Bad and Better Call
        Saul characters. The images get shuffled every-time they are clicked.
        You CAN NOT click on any image more than once or else your score resets
        to zero. When you click all the images once, you pass to the next level in 
        which the number of pictures get doubled.
        The main objective is to get the highest score as possible.
      </p>
      <button>
        <Link to="/play">Play</Link>
      </button>
    </Container>
  );
}

export default HomePage;
