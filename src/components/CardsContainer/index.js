/* eslint-disable react/prop-types */
import React from "react";
import Container from "./Container";
import Card from "../Card";
import uniqid from 'uniqid';

function CardsContainer(props) {
  return (
    <Container>
      {props.data.map((char) => (
        <Card
          key={uniqid()}
          img={char.img}
          name={char.name}
          id = { char.char_id }
          handleClick = { props.handleClick }
        />
      ))}
    </Container>
  );
}

export default CardsContainer;
