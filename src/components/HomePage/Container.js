import DialogModal from "../shared/DialogModal";
import styled from "styled-components";


const Container = styled(DialogModal) ` 

    z-index: 2;

    & a {
        text-decoration: none;
        color: white;
    }

    & p {
        font-size: 1.5rem;
        max-width: 80%;
        text-align: 'justify';
    }

`;

export default Container;