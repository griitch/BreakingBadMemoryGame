import styled from 'styled-components';
import CenteredDiv from './CenteredDiv';

const Loading  = styled(CenteredDiv) `  

    flex-direction: column;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: black;
    color: white;
    font-size: 2rem;
    z-index: 2;

    & * {
        margin: 1.5rem 0;
    }
`;

export default Loading;