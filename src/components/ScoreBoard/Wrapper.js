import styled from "styled-components";
import CenteredDiv from "../shared/CenteredDiv";

const Wrapper = styled(CenteredDiv) `
    color: white;
    padding : 1rem;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
`;

const Current = styled.span ` 
    border-right: 1px solid white;
    padding-right: 1.5rem;
    margin-right: 1.5rem;
    color : lightgreen;
`;

export  { Wrapper, Current };