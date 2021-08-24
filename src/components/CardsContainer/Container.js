import styled from "styled-components";

const Container = styled.div`

  @media (max-width: 950px)  {
    width: 80%;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 2rem;
  }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem 0.75rem;
  justify-items: center;
  align-items: center;
  width: 90%;
  margin: auto;

`;

export default Container;
