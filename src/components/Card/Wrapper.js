import styled from "styled-components";
import CenteredDiv from "../shared/CenteredDiv";

const Wrapper = styled(CenteredDiv)`
  width: 100%;
  flex-direction: column;
  border: 1px solid white;
  background-color: #1F6032;
  border-radius: 15px;
  line-height: 60px;
  color: white;
  transition: transform 0.25s;
  
  & img {
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 290px;
  }

  &:hover {
      transform: scale(1.03);
      box-shadow: 2px 2px 5px white, -2px -2px 5px white;
      cursor: pointer;
  }

  
`;

export default Wrapper;
