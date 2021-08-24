import React from "react";
import Wrapper from "./Wrapper";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <Wrapper
      onClick = { () => props.handleClick( props.id ) }
    >
      <img src={props.img} />
          {props.name}

    </Wrapper>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func,
  id : PropTypes.number
};

export default Card;
