import styled from 'styled-components';
import Modal from './Modal';


const DialogModal = styled(Modal) `
    & button {
        margin-top: 1rem;
        appearance: none;
        padding: 1rem  1.5rem;
        border: 1.5px solid white;
        border-radius: 10px;
        background-color: darkgreen;
        color: white;
        font-size: 1.5rem;
    }

    & button:hover {
        cursor: pointer;
        background-color: #093009;
    }
`
export default DialogModal;