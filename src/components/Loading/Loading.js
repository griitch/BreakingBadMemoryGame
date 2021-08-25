import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Modal from '../shared/Modal';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const Loading  = styled(Modal) `  
    & img {
        height: 100px;
        width: 100px;
        animation: ${rotate} 2.5s linear infinite;
        margin-top: 3rem;
    }
`;



export default Loading;